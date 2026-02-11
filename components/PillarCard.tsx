interface PillarCardProps {
  number: number;
  title: string;
  description: string;
  arabic?: string;
  icon: string;
}

export default function PillarCard({ number, title, description, arabic, icon }: PillarCardProps) {
  return (
    <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      {/* Icon and number */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-3xl">
          {icon}
        </div>
        <div>
          <span className="text-gold-500 font-bold text-sm">
            {number}
          </span>
          <h3 className="text-xl font-bold text-primary-800">{title}</h3>
        </div>
      </div>

      {/* Arabic text if present */}
      {arabic && (
        <p className="font-arabic text-lg text-primary-700 mb-3 leading-relaxed text-center bg-primary-50/50 rounded-lg p-3">
          {arabic}
        </p>
      )}

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
