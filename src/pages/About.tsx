
import React from 'react';
import { Trophy, Users, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">About the Tournament</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The ChessMaster Tournament is an annual championship bringing together the world's finest chess players 
            in a celebration of strategy, skill, and sportsmanship.
          </p>
        </div>

        {/* Tournament Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Tournament Format</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                The tournament follows a Swiss-system format with 9 rounds over 10 days, ensuring every player 
                gets maximum playing time while maintaining competitive integrity.
              </p>
              <p className="leading-relaxed">
                Time control: 90 minutes for the first 40 moves, then 30 minutes for the rest of the game, 
                with a 30-second increment from move 1.
              </p>
              <p className="leading-relaxed">
                All games are FIDE-rated and follow international chess federation rules and regulations.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Eligibility & Categories</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Open to players of all skill levels from around the world. Players are categorized by rating:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Grandmaster Section (2500+ FIDE rating)</li>
                <li>Master Section (2200-2499 FIDE rating)</li>
                <li>Expert Section (2000-2199 FIDE rating)</li>
                <li>Open Section (Under 2000 rating)</li>
              </ul>
              <p className="leading-relaxed">
                Special prizes available for women, junior, and senior players in each category.
              </p>
            </div>
          </div>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Trophy className="h-12 w-12 text-amber-500 mx-auto" />
              <CardTitle className="text-slate-800">Prize Pool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-600 mb-2">$50,000</p>
              <p className="text-gray-600">Total prizes with additional category awards</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-500 mx-auto" />
              <CardTitle className="text-slate-800">Players</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">128</p>
              <p className="text-gray-600">Maximum participants from 20+ countries</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="h-12 w-12 text-green-500 mx-auto" />
              <CardTitle className="text-slate-800">Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 mb-2">10 Days</p>
              <p className="text-gray-600">March 15-25, 2024</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-purple-500 mx-auto" />
              <CardTitle className="text-slate-800">Rounds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600 mb-2">9</p>
              <p className="text-gray-600">Swiss system format</p>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Mission */}
        <div className="bg-slate-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-700 mb-4">Promote Excellence</h3>
              <p className="text-gray-600">
                Foster the highest level of chess competition while maintaining the spirit of fair play and sportsmanship.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-700 mb-4">Build Community</h3>
              <p className="text-gray-600">
                Create connections between chess players from different cultures and backgrounds through our shared love of the game.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-700 mb-4">Inspire Growth</h3>
              <p className="text-gray-600">
                Provide opportunities for players to improve their skills and achieve new milestones in their chess journey.
              </p>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Venue</h2>
          <p className="text-xl text-gray-600 mb-4">
            Grand Chess Hall, International Convention Center
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our state-of-the-art venue features professional playing conditions, live broadcast facilities, 
            analysis rooms, and comfortable spaces for players and spectators. Located in the heart of the city 
            with easy access to hotels, restaurants, and transportation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
