
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Trophy className="h-16 w-16 text-amber-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ChessMaster Tournament 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate chess championship featuring grandmasters and rising stars from around the world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-amber-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">March 15-25, 2025</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center text-amber-400">
              <Users className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">128 Players Maximum</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              {/* <Button size="lg" className="bg-amber-500 text-black font-bold px-8 py-3 text-lg">
                Hurry UP!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button> */}
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-gradient-to-r from-black to-gray-800 hover:from-white hover:to-white hover:text-black px-10 py-4 text-xl font-semibold tracking-wide rounded-full shadow-lg transition-all duration-300 ease-in-out">
                 ♟️ Where Every Move Makes History – Join the Battle of Minds! ♟️
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative chess pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className={`${
                  (Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white' : 'bg-black'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Tournament Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-slate-800">Prize Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  $50,000 total prize pool with additional prizes for category winners and special achievements
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-slate-800">Elite Players</h3>
                <p className="text-gray-600 leading-relaxed">
                  Featuring international grandmasters, masters, and promising talents from over 20 countries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-slate-800">Live Coverage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch live games, analysis by experts, and replay famous matches with our interactive viewer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't miss your chance to be part of this prestigious tournament. 
            Registration closes soon!
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 text-lg">
              Register Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
