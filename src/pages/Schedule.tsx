import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Schedule = () => {
  const scheduleData = [
    {
      date: 'August 15, 2025',
      day: 'Day 1',
      rounds: [
        {
          round: 'Opening Ceremony',
          time: '10:00 AM',
          duration: '1 hour',
          description: 'Welcome ceremony and player registration',
          status: 'upcoming'
        },
        {
          round: 'Round 1',
          time: '2:00 PM',
          duration: '4 hours',
          description: 'First round matches across all categories',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 16, 2025',
      day: 'Day 2',
      rounds: [
        {
          round: 'Round 2',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Second round Swiss pairings',
          status: 'upcoming'
        },
        {
          round: 'Analysis Session',
          time: '7:00 PM',
          duration: '2 hours',
          description: 'GM commentary on selected games',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 17, 2025',
      day: 'Day 3',
      rounds: [
        {
          round: 'Round 3',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Third round matches',
          status: 'upcoming'
        },
        {
          round: 'Simultaneous Exhibition',
          time: '6:00 PM',
          duration: '3 hours',
          description: 'GM simultaneous play with local players',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 18, 2025',
      day: 'Day 4',
      rounds: [
        {
          round: 'Round 4',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Fourth round matches',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 19, 2025',
      day: 'Day 5',
      rounds: [
        {
          round: 'Rest Day',
          time: 'All Day',
          duration: '',
          description: 'Optional activities and sightseeing',
          status: 'rest'
        }
      ]
    },
    {
      date: 'August 20, 2025',
      day: 'Day 6',
      rounds: [
        {
          round: 'Round 5',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Fifth round matches',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 21, 2025',
      day: 'Day 7',
      rounds: [
        {
          round: 'Round 6',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Sixth round matches',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 22, 2025',
      day: 'Day 8',
      rounds: [
        {
          round: 'Round 7',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Seventh round matches',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 23, 2025',
      day: 'Day 9',
      rounds: [
        {
          round: 'Round 8',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Eighth round matches',
          status: 'upcoming'
        }
      ]
    },
    {
      date: 'August 24, 2025',
      day: 'Day 10',
      rounds: [
        {
          round: 'Round 9 (Final)',
          time: '10:00 AM',
          duration: '4 hours',
          description: 'Final round determining champions',
          status: 'upcoming'
        },
        {
          round: 'Closing Ceremony',
          time: '6:00 PM',
          duration: '2 hours',
          description: 'Prize distribution and farewell',
          status: 'upcoming'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'rest':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'Live Now';
      case 'upcoming':
        return 'Upcoming';
      case 'rest':
        return 'Rest Day';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Tournament Schedule</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete schedule for the ChessMaster Tournament 2025. All times are in local venue time.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <Card key={dayIndex} className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-800">{day.day}</CardTitle>
                    <p className="text-gray-600 flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {day.date}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {day.rounds.map((round, roundIndex) => (
                    <div
                      key={roundIndex}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-800">
                            {round.round}
                          </h3>
                          <Badge className={getStatusColor(round.status)}>
                            {getStatusText(round.status)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{round.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {round.time}
                          </span>
                          {round.duration && (
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              Duration: {round.duration}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {round.status === 'ongoing' && (
                        <div className="mt-4 md:mt-0">
                          <div className="flex items-center text-blue-600">
                            <div className="animate-pulse w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            Live Now
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-800 mb-4">Important Notes</h3>
          <ul className="space-y-2 text-amber-700">
            <li>• Players must arrive 30 minutes before their scheduled round</li>
            <li>• Time control: 90 minutes + 30 minutes with 30-second increment</li>
            <li>• Default time is 15 minutes after the scheduled start</li>
            <li>• Analysis room available 1 hour after each round</li>
            <li>• Live commentary available for top board games</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
