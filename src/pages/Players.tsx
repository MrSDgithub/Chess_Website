
import React from 'react';
import { Users, Trophy, MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Players = () => {
  // Mock data - will be replaced with Supabase data
  const featuredPlayers = [
    {
      id: 1,
      name: "Magnus Carlsen",
      country: "Norway",
      rating: 2830,
      title: "GM",
      category: "Grandmaster",
      achievements: ["World Champion 2013-2023", "5x World Champion"],
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ding Liren",
      country: "China",
      rating: 2788,
      title: "GM",
      category: "Grandmaster",
      achievements: ["World Champion 2023", "Candidates Winner 2022"],
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Gukesh Dommaraju",
      country: "India",
      rating: 2764,
      title: "GM",
      category: "Grandmaster",
      achievements: ["Youngest World Champion", "Olympiad Gold Medal"],
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Ju Wenjun",
      country: "China",
      rating: 2564,
      title: "GM",
      category: "Grandmaster",
      achievements: ["Women's World Champion", "Multiple-time Olympiad Winner"],
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Hikaru Nakamura",
      country: "USA",
      rating: 2768,
      title: "GM",
      category: "Grandmaster",
      achievements: ["5x US Champion", "Speed Chess Champion"],
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Fabiano Caruana",
      country: "USA",
      rating: 2805,
      title: "GM",
      category: "Grandmaster",
      achievements: ["World Championship Challenger 2018", "US Champion"],
      photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const playerStats = {
    total: 128,
    grandmasters: 32,
    masters: 48,
    experts: 36,
    open: 12,
    countries: 24
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 2700) return "text-purple-600 bg-purple-100";
    if (rating >= 2500) return "text-blue-600 bg-blue-100";
    if (rating >= 2200) return "text-green-600 bg-green-100";
    return "text-orange-600 bg-orange-100";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Registered Players</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the elite chess players competing in the ChessMaster Tournament 2024.
          </p>
        </div>

        {/* Player Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{playerStats.total}</div>
              <div className="text-sm text-gray-600">Total Players</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">{playerStats.grandmasters}</div>
              <div className="text-sm text-gray-600">Grandmasters</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">{playerStats.masters}</div>
              <div className="text-sm text-gray-600">Masters</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">{playerStats.experts}</div>
              <div className="text-sm text-gray-600">Experts</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-amber-600">{playerStats.open}</div>
              <div className="text-sm text-gray-600">Open Section</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">{playerStats.countries}</div>
              <div className="text-sm text-gray-600">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Database Integration Notice */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Users className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Live Player Data:</strong> Once connected to Supabase, this page will display real-time 
            registration data, player profiles, ratings history, and tournament statistics.
          </AlertDescription>
        </Alert>

        {/* Featured Players */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Featured Players</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlayers.map((player) => (
              <Card key={player.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={player.photo} 
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{player.name}</CardTitle>
                  <div className="flex items-center justify-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {player.country}
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-slate-700">
                      {player.title}
                    </Badge>
                    <Badge className={getRatingColor(player.rating)}>
                      {player.rating}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center justify-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      Key Achievements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {player.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center justify-center">
                          <Star className="h-3 w-3 mr-1 text-amber-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Player Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Grandmaster Section
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 text-sm mb-2">Rating: 2500+</p>
              <p className="text-purple-600 text-sm">
                Elite international grandmasters competing for the ultimate title and largest prize share.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Master Section
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm mb-2">Rating: 2200-2499</p>
              <p className="text-blue-600 text-sm">
                International and national masters showcasing high-level tactical and strategic play.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Expert Section
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm mb-2">Rating: 2000-2199</p>
              <p className="text-green-600 text-sm">
                Skilled club players and rising talents aiming to achieve master-level play.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Open Section
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 text-sm mb-2">Rating: Under 2000</p>
              <p className="text-orange-600 text-sm">
                Enthusiastic players of all skill levels competing in a supportive environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Players;
