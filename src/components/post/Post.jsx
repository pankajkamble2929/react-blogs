import './post.css'
import blogImg from './img/blog.jpg'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={blogImg} alt="Blog IMG" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Travel</span>
                </div>
                <span className="postTitle">Lorem Ipusm Lorem Ipusm</span>
                <hr/>
                <span className="postDate">5 Hours Ago</span>
            </div>
            <p className="postDesc">Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum Lorem Impsum </p>        
        </div>
        
    )
}
