
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with the tournament organizers for any questions, support, or information 
            about the ChessMaster Tournament 2024.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">General Information</div>
                  <div className="text-gray-600">info@chessmastertoruament.com</div>
                </div>
                <div>
                  <div className="font-medium">Registration</div>
                  <div className="text-gray-600">register@chessmastertoruament.com</div>
                </div>
                <div>
                  <div className="font-medium">Technical Support</div>
                  <div className="text-gray-600">support@chessmastertoruament.com</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">Main Office</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
                <div>
                  <div className="font-medium">Registration Hotline</div>
                  <div className="text-gray-600">+1 (555) 234-5678</div>
                </div>
                <div>
                  <div className="font-medium">Emergency (Tournament Days)</div>
                  <div className="text-gray-600">+1 (555) 345-6789</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Clock className="h-5 w-5 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-800">
                    <strong>Tournament Period:</strong> Extended hours during March 15-25, 2024
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <MapPin className="h-5 w-5 mr-2" />
                  Venue Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-medium">Grand Chess Hall</div>
                  <div className="text-gray-600">
                    International Convention Center<br />
                    123 Tournament Avenue<br />
                    Chess City, CC 12345<br />
                    United States
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="Enter your email address" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select a subject</option>
                      <option value="registration">Registration Questions</option>
                      <option value="schedule">Schedule & Tournament Info</option>
                      <option value="accommodation">Accommodation & Travel</option>
                      <option value="technical">Technical Support</option>
                      <option value="media">Media Inquiries</option>
                      <option value="sponsor">Sponsorship Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      I would like to receive updates about the tournament and future chess events
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <Users className="h-5 w-5 mr-2" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      What is the registration deadline?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Registration closes on March 10, 2024, or when we reach the maximum of 128 players, 
                      whichever comes first.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Can I get a refund if I need to cancel?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Full refunds are available until March 1, 2024. After that date, a 50% refund 
                      applies until March 8, 2024. No refunds after March 8, 2024.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Is accommodation provided?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We have partnerships with local hotels offering discounted rates for tournament 
                      participants. Details will be sent upon registration confirmation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">
                      Will games be broadcast live?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! All top board games will be broadcast live with GM commentary. 
                      Selected games from other boards will also be available for viewing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Tournament Venue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Grand Chess Hall, International Convention Center</p>
                  <p className="text-sm">Full map integration available with location services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
