interface ScoreProps {
  scoreValue: number;
  highScore: number;
}

const Score = ({ scoreValue, highScore }: ScoreProps) => {
  return (
    <div className=" bg-blue-700 p-4 h-full flex flex-col rounded-[10px] border-[2px] border-blue-600">
      <span className=" text-white font-bold text-center max-sm:text-sm">
        SCORE/HIGH-SCORE
      </span>
      <div className="flex justify-center items-center h-full">
        <span className="text-green-500 font-bold text-center text-5xl max-sm:text-[35px]">
          {scoreValue}/{highScore}
        </span>
      </div>
    </div>
  );
};

export default Score;
