import { useState } from "react"

export function TwitterFollowCard ({ userName, children, initialIsFollowing }) {

    /*
        const state = useState(false)
        const isFollowinf = state[0]
        const setIsFollowing = state[1]
        Same as:
    */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Following' : 'Follow'
    // Estilo
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return(
        <article className="tw-followCard"> 
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/x/${userName}`} 
                    alt="Nintendo Avatar"/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}