import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return (
        <section className='App'>

            <TwitterFollowCard
                /* Boolean 
                isFollowing={false} */
                userName="nintendo" 
            >
                任天堂株式会社
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName="midudev" 
            >
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard userName="ivan_baeza"> Ivan Baeza </TwitterFollowCard>
            <TwitterFollowCard userName="playstation"> PlayStation </TwitterFollowCard>

        </section>
    )
}