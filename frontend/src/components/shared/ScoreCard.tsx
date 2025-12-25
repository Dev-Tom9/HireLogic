interface ScoreCardProps {
  score: number;
  label: string;
  reasoning: string[];
}

export const ScoreCard = ({ score, label, reasoning }: ScoreCardProps) => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</h4>
        <span className={`text-2xl font-bold ${score > 70 ? 'text-green-600' : 'text-amber-500'}`}>
          {score}%
        </span>
      </div>
      <div className="space-y-2">
        {reasoning.map((point, i) => (
          <div key={i} className="flex gap-2 text-sm text-slate-600">
            <span className="text-blue-500">•</span>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
};
