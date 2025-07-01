import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    birthDate: '',
    rating: '',
    title: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First check if email already exists
      const { data: existingPlayer, error: checkError } = await supabase
        .from('players')
        .select('email')
        .eq('email', formData.email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        // PGRST116 is "not found" error, which is what we want
        throw checkError;
      }

      if (existingPlayer) {
        toast({
          title: "Email Already Registered",
          description: "This email address is already registered for the tournament. Please use a different email or contact support if you need help.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('players')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            birth_date: formData.birthDate,
            rating: formData.rating ? parseInt(formData.rating) : 1200,
            title: formData.title,
            emergency_contact: formData.emergencyContact,
            emergency_phone: formData.emergencyPhone,
            payment_status: 'pending'
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Registration Successful!",
        description: "Your tournament registration has been submitted successfully.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        birthDate: '',
        rating: '',
        title: '',
        emergencyContact: '',
        emergencyPhone: ''
      });

    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Handle specific duplicate key error
      if (error.code === '23505' && error.message.includes('players_email_key')) {
        toast({
          title: "Email Already Registered",
          description: "This email address is already registered for the tournament. Please use a different email or contact support if you need help.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Registration Failed",
          description: error.message || "There was an error submitting your registration. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Tournament Registration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the ChessMaster Tournament 2024 and compete with players from around the world.
          </p>
        </div>

        {/* Success Notice */}
        <Alert className="mb-8 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Registration is Now Open!</strong> Fill out the form below to register for the tournament.
            Your information will be securely stored and you'll receive confirmation via email.
          </AlertDescription>
        </Alert>

        {/* Registration Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Registration Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700">Entry Fees</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• Grandmaster Section: $150</li>
                  <li>• Master Section: $100</li>
                  <li>• Expert Section: $75</li>
                  <li>• Open Section: $50</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700">What's Included</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• Tournament entry and pairings</li>
                  <li>• Official tournament certificate</li>
                  <li>• Access to analysis room</li>
                  <li>• Welcome reception and dinner</li>
                  <li>• Live game commentary access</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-800">Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700">Player Information Needed</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• Full name and contact details</li>
                  <li>• FIDE rating (if available)</li>
                  <li>• National chess federation ID</li>
                  <li>• Preferred playing section</li>
                  <li>• Emergency contact information</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700">Documents Required</h4>
                <ul className="text-gray-600 space-y-1 mt-2">
                  <li>• Valid photo identification</li>
                  <li>• FIDE rating certificate (if claiming rated section)</li>
                  <li>• Medical clearance (for senior players)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-800">Player Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Location and Birth Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="birthDate">Date of Birth *</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Chess Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rating">Chess Rating (optional)</Label>
                  <Input
                    id="rating"
                    name="rating"
                    type="number"
                    placeholder="e.g., 1500"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="title">Chess Title (optional)</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., FM, IM, GM"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                  <Input
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Registration...' : 'Register for Tournament'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Help with Registration?</h3>
          <p className="text-gray-600 mb-4">
            Contact our tournament organizers for assistance with the registration process.
          </p>
          <div className="text-gray-600">
            <p>Email: registration@chessmastertoruament.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Monday-Friday, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
