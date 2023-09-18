import { HeartPulse } from 'lucide-react'

interface FeatureHeaderCenterProps {
  title: string
  subTitle: string
}

export function FeatureHeaderCenter({
  title,
  subTitle
}: FeatureHeaderCenterProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <h2 className="relative flex items-center justify-start gap-2 text-primary-200">
        <HeartPulse size={18} />
        <span className="text-base font-bold uppercase">{subTitle}</span>
        <HeartPulse size={18} />
      </h2>

      <h1 className="text-4xl font-bold max-w-s-1030:text-3xl">{title}</h1>
    </div>
  )
}
