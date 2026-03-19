"use client"

interface ErrorProps {
    error: Error & {digest?:string};
    
}

export default function Error ({error}:ErrorProps){
    return(
        <section>
            <h1>Something went wrong</h1>
        </section>
    )

}