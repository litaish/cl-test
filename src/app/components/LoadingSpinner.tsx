import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'

const LoadingSpinner = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <Icon path={mdiLoading} size={1} className="animate-spin" />
            <span className="text-slate-500">{text}</span>
        </div>
    )
}

export default LoadingSpinner
