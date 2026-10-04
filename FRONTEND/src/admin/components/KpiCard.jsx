import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const KpiCard = ({
  title,
  value,
  subtext,
  change,
  changeType = 'positive', // 'positive' | 'negative' | 'neutral'
  icon: Icon,
  iconColor = 'text-amber-600 bg-amber-50 border-amber-200',
  period = 'vs yesterday',
  chartData
}) => {
  return (
    <div className="bg-white border border-stone-200/80 rounded-xl p-5 shadow-xs hover:shadow-md transition-all duration-200 hover:border-amber-300 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-stone-900 tracking-tight">{value}</h3>
        </div>
        {Icon && (
          <div className={`p-2.5 rounded-lg border ${iconColor} transition-transform group-hover:scale-105`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        {change !== undefined ? (
          <div className="flex items-center gap-1.5 font-medium">
            <span
              className={`inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                changeType === 'positive'
                  ? 'bg-emerald-50 text-emerald-700'
                  : changeType === 'negative'
                  ? 'bg-rose-50 text-rose-700'
                  : 'bg-stone-100 text-stone-700'
              }`}
            >
              {changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-0.5" />}
              {changeType === 'negative' && <TrendingDown className="w-3 h-3 mr-0.5" />}
              {changeType === 'neutral' && <Minus className="w-3 h-3 mr-0.5" />}
              {change}
            </span>
            <span className="text-stone-400 font-normal">{period}</span>
          </div>
        ) : (
          <span className="text-stone-400">{subtext}</span>
        )}
      </div>
    </div>
  );
};

export default KpiCard;