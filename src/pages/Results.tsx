
import React from 'react';
import { Trophy, Users, MessageSquare, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Results = () => {
  // Mock match results data
  const matchResults = [
    {
      id: 1,
      round: 1,
      date: "2024-03-15",
      whitePlayer: "Magnus Carlsen",
      blackPlayer: "Fabiano Caruana",
      whiteRating: 2830,
      blackRating: 2805,
      result: "1-0",
      moves: 42,
      opening: "Sicilian Defense, Najdorf Variation",
      timeControl: "90+30",
      status: "completed",
      comments: [
        {
          id: 1,
          author: "GM Analysis",
          text: "Brilliant tactical sequence starting with 28.Rxf7! completely changed the evaluation.",
          timestamp: "2024-03-15T16:30:00"
        },
        {
          id: 2,
          author: "Chess Fan",
          text: "Amazing endgame technique displayed by Carlsen. The rook and pawn ending was instructive.",
          timestamp: "2024-03-15T17:15:00"
        }
      ]
    },
    {
      id: 2,
      round: 1,
      date: "2024-03-15",
      whitePlayer: "Ding Liren",
      blackPlayer: "Gukesh Dommaraju",
      whiteRating: 2788,
      blackRating: 2764,
      result: "1/2-1/2",
      moves: 67,
      opening: "Queen's Gambit Declined",
      timeControl: "90+30",
      status: "completed",
      comments: [
        {
          id: 1,
          author: "Tournament Director",
          text: "A fighting draw with both players showing excellent preparation in the opening.",
          timestamp: "2024-03-15T18:45:00"
        }
      ]
    },
    {
      id: 3,
      round: 2,
      date: "2024-03-16",
      whitePlayer: "Hikaru Nakamura",
      blackPlayer: "Ju Wenjun",
      whiteRating: 2768,
      blackRating: 2564,
      result: "0-1",
      moves: 38,
      opening: "English Opening",
      timeControl: "90+30",
      status: "completed",
      comments: [
        {
          id: 1,
          author: "Spectator",
          text: "Ju Wenjun's positional play was exceptional. The way she gradually improved her pieces was masterful.",
          timestamp: "2024-03-16T15:20:00"
        },
        {
          id: 2,
          author: "Chess Coach",
          text: "This game will be studied for years. Perfect example of how to convert a slight positional advantage.",
          timestamp: "2024-03-16T16:00:00"
        }
      ]
    }
  ];

  const getResultColor = (result: string) => {
    if (result === "1-0") return "text-green-600 bg-green-100";
    if (result === "0-1") return "text-red-600 bg-red-100";
    return "text-gray-600 bg-gray-100";
  };

  const getResultText = (result: string, whitePlayer: string, blackPlayer: string) => {
    if (result === "1-0") return `${whitePlayer} wins`;
    if (result === "0-1") return `${blackPlayer} wins`;
    return "Draw";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Match Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete game results with analysis and commentary from the ChessMaster Tournament 2024.
          </p>
        </div>

        {/* Database Integration Notice */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Trophy className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Live Results:</strong> Once connected to Supabase, results will be updated in real-time 
            with live commentary, player statistics, and tournament standings.
          </AlertDescription>
        </Alert>

        {/* Tournament Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Games Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Decisive Games</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-gray-600">16</div>
              <div className="text-sm text-gray-600">Draws</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">52</div>
              <div className="text-sm text-gray-600">Avg Moves</div>
            </CardContent>
          </Card>
        </div>

        {/* Match Results */}
        <div className="space-y-8">
          {matchResults.map((match) => (
            <Card key={match.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="text-slate-700">
                      Round {match.round}
                    </Badge>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(match.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge className={getResultColor(match.result)}>
                    {getResultText(match.result, match.whitePlayer, match.blackPlayer)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Players and Game Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">Players</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded">
                        <div>
                          <div className="font-medium text-slate-800">{match.whitePlayer}</div>
                          <div className="text-sm text-gray-600">White • Rating: {match.whiteRating}</div>
                        </div>
                        <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-sm"></div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded">
                        <div>
                          <div className="font-medium text-slate-800">{match.blackPlayer}</div>
                          <div className="text-sm text-gray-600">Black • Rating: {match.blackRating}</div>
                        </div>
                        <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">Game Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Result:</span>
                        <span className="font-medium">{match.result}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Moves:</span>
                        <span className="font-medium">{match.moves}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Opening:</span>
                        <span className="font-medium">{match.opening}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time Control:</span>
                        <span className="font-medium">{match.timeControl}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Game Analysis & Comments ({match.comments.length})
                    </h3>
                    <Button variant="outline" size="sm">
                      Add Comment
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {match.comments.map((comment) => (
                      <div key={comment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-800">{comment.author}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{comment.text}</p>
                      </div>
                    ))}
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 text-sm">
                        💡 <strong>Add your analysis:</strong> Once logged in, you can share your thoughts 
                        and analysis of this game with the chess community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    View in Game Viewer
                  </Button>
                  <Button variant="outline" size="sm">
                    Download PGN
                  </Button>
                  <Button variant="outline" size="sm">
                    Share Game
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
