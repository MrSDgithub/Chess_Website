
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GameViewer = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Famous game: Gukesh vs Carlsen (example)
  const gameData = {
    white: "Gukesh Dommaraju",
    black: "Magnus Carlsen",
    whiteRating: 2764,
    blackRating: 2830,
    event: "ChessMaster Tournament 2024",
    date: "2024-03-20",
    result: "1-0",
    opening: "Sicilian Defense, Najdorf Variation",
    moves: [
      "1. e4 c5", "2. Nf3 d6", "3. d4 cxd4", "4. Nxd4 Nf6", "5. Nc3 a6",
      "6. Be3 e6", "7. f3 b5", "8. Qd2 Bb7", "9. O-O-O Nbd7", "10. h4 b4",
      "11. Nd5 exd5", "12. exd5 Ne5", "13. Kb1 Rc8", "14. f4 Nc4", "15. Bxc4 Rxc4",
      "16. f5 Be7", "17. g4 O-O", "18. g5 Nh5", "19. Nf3 Qc7", "20. Rd3 Rfc8",
      "21. Re1 Qc5", "22. Qf2 Qxf2", "23. Bxf2 R4c2", "24. Re2 Rxe2", "25. Nxe2 Rc2",
      "26. Nd4 Rxf2", "27. f6 Bf8", "28. fxg7 Bxg7", "29. Nf5 Bf8", "30. g6 hxg6",
      "31. Nxd6 Bxd6", "32. Rxd6 Rxb2+", "33. Kc1 Ra2", "34. Rd8+ Kg7", "35. d6 Ra1+",
      "36. Kd2 Ra2+", "37. Ke3 Ra3+", "38. Kf4 Ra4+", "39. Kg5 Ra5+", "40. Kh6 Ra6",
      "41. d7 Rd6", "42. Rxd6 1-0"
    ]
  };

  const totalMoves = gameData.moves.length;

  const handlePrevMove = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  };

  const handleNextMove = () => {
    if (currentMove < totalMoves) {
      setCurrentMove(currentMove + 1);
    }
  };

  const handleReset = () => {
    setCurrentMove(0);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would trigger automatic move progression
  };

  const handleJumpToStart = () => {
    setCurrentMove(0);
  };

  const handleJumpToEnd = () => {
    setCurrentMove(totalMoves);
  };

  // Create a simple visual board representation
  const createBoard = () => {
    const squares = [];
    for (let rank = 8; rank >= 1; rank--) {
      for (let file = 1; file <= 8; file++) {
        const isLight = (rank + file) % 2 === 0;
        const squareColor = isLight ? 'bg-amber-100' : 'bg-amber-800';
        squares.push(
          <div
            key={`${file}${rank}`}
            className={`${squareColor} aspect-square flex items-center justify-center text-2xl font-bold relative`}
          >
            {/* Initial piece positions would be calculated based on currentMove */}
            {rank === 1 && file === 1 && currentMove === 0 && '♜'}
            {rank === 1 && file === 2 && currentMove === 0 && '♞'}
            {rank === 1 && file === 3 && currentMove === 0 && '♝'}
            {rank === 1 && file === 4 && currentMove === 0 && '♛'}
            {rank === 1 && file === 5 && currentMove === 0 && '♚'}
            {rank === 1 && file === 6 && currentMove === 0 && '♝'}
            {rank === 1 && file === 7 && currentMove === 0 && '♞'}
            {rank === 1 && file === 8 && currentMove === 0 && '♜'}
            {rank === 2 && currentMove === 0 && '♟'}
            {rank === 7 && currentMove === 0 && '♙'}
            {rank === 8 && file === 1 && currentMove === 0 && '♖'}
            {rank === 8 && file === 2 && currentMove === 0 && '♘'}
            {rank === 8 && file === 3 && currentMove === 0 && '♗'}
            {rank === 8 && file === 4 && currentMove === 0 && '♕'}
            {rank === 8 && file === 5 && currentMove === 0 && '♔'}
            {rank === 8 && file === 6 && currentMove === 0 && '♗'}
            {rank === 8 && file === 7 && currentMove === 0 && '♘'}
            {rank === 8 && file === 8 && currentMove === 0 && '♖'}
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Interactive Game Viewer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Replay and analyze famous chess games move by move with our interactive viewer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chessboard */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="font-bold text-lg">{gameData.black}</div>
                    <div className="text-gray-600">Rating: {gameData.blackRating}</div>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">{gameData.result}</Badge>
                  <div className="text-right">
                    <div className="font-bold text-lg">{gameData.white}</div>
                    <div className="text-gray-600">Rating: {gameData.whiteRating}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Chess Board */}
                <div className="bg-amber-900 p-4 rounded-lg shadow-lg mb-6">
                  <div className="grid grid-cols-8 gap-0 border-2 border-amber-900 max-w-md mx-auto">
                    {createBoard()}
                  </div>
                </div>

                {/* Move Controls */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">
                      Move {Math.floor(currentMove / 2) + 1} of {Math.floor(totalMoves / 2) + 1}
                    </p>
                    <div className="text-lg font-mono">
                      {currentMove > 0 ? gameData.moves[currentMove - 1] : 'Starting position'}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleJumpToStart}
                      disabled={currentMove === 0}
                    >
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrevMove}
                      disabled={currentMove === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNextMove}
                      disabled={currentMove === totalMoves}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleJumpToEnd}
                      disabled={currentMove === totalMoves}
                    >
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleReset}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Information and Move List */}
          <div className="space-y-6">
            {/* Game Info */}
            <Card>
              <CardHeader>
                <CardTitle>Game Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-gray-600">Event:</span>
                  <div className="font-medium">{gameData.event}</div>
                </div>
                <div>
                  <span className="text-gray-600">Date:</span>
                  <div className="font-medium">{gameData.date}</div>
                </div>
                <div>
                  <span className="text-gray-600">Opening:</span>
                  <div className="font-medium">{gameData.opening}</div>
                </div>
                <div>
                  <span className="text-gray-600">Result:</span>
                  <div className="font-medium">{gameData.result}</div>
                </div>
              </CardContent>
            </Card>

            {/* Move List */}
            <Card>
              <CardHeader>
                <CardTitle>Move List (PGN)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-y-auto space-y-1">
                  {gameData.moves.map((move, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded cursor-pointer text-sm ${
                        index + 1 === currentMove
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setCurrentMove(index + 1)}
                    >
                      {move}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analysis Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Opening:</strong> The Najdorf Variation is one of the most complex and theory-heavy lines in the Sicilian Defense.
                  </p>
                  <p>
                    <strong>Key Moment:</strong> White's breakthrough with g4-g5 created massive attacking chances on the kingside.
                  </p>
                  <p>
                    <strong>Endgame:</strong> The pawn promotion proved decisive in this tactical masterpiece.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notice about advanced features */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">🚀 Enhanced Game Viewer</h3>
          <p className="text-blue-700 mb-4">
            For a fully interactive chess experience, consider integrating a professional chess library:
          </p>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Real-time piece movement animations</li>
            <li>• Engine analysis and evaluation</li>
            <li>• Multiple game format support (PGN, FEN)</li>
            <li>• Position setup and editing capabilities</li>
            <li>• Integration with chess databases</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameViewer;
