const ErrorAlert = ({ message }: { message: string }) => {
    return (
        <div className="rounded-md border-l-8 border-red-400 bg-red-100 p-2">
            <p className="font-bold text-red-800">An error has occured!</p>
            <p className="text-red-800">{message}</p>
        </div>
    )
}

export default ErrorAlert
