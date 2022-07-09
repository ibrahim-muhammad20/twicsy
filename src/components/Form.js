import React,{useState} from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");

    function handleChange1(event) {
        setName(event.target.value);
       
      }
    function handleChange2(event) {
       
        setEmail(event.target.value);
        
      }
    function handleChange3(event) {
        
        setReview(event.target.value)
      }
  return (
    <div>
       <form className="form form--reviews"><button className="form__close-btn"><svg className="svg-icon svg-icon--close" width="17"
                height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.4009 2.80511C11.1951 -0.400722 5.99645 -0.400722 2.80506 2.79067C-0.40077 5.9965 -0.40077 11.1952 2.80506 14.401C5.99646 17.5924 11.1951 17.5924 14.4009 14.3865C17.5923 11.1951 17.5923 5.9965 14.4009 2.80511ZM12.307 6.22755L10.9641 4.88457L8.59578 7.25284L6.2275 4.88457L4.88452 6.22755L7.25279 8.59583L4.88452 10.9641L6.22751 12.3071L8.59578 9.93881L10.9641 12.3071L12.307 10.9641L9.93876 8.59583L12.307 6.22755Z"
                    fill="#FF553C"></path>
            </svg></button>
        <div className="form__inner">
            <div className="flex-row lg-cols-2 md-cols-2 sm-cols-2 xs-cols-1">
                <div className="flex-col">
                    <div className="field">
                        <label for="name" className="field__label">Your name</label>
                        <div onChange={handleChange1} className="field__control"><input  type="text" name="name" className="field__input"
                                placeholder="Your name" id="name" value={name}/></div>
                    </div>
                    <div className="field">
                        <label for="email" className="field__label">Your e-mail</label>
                        <div onChange={handleChange2}  className="field__control"><input   type="text" name="email" className="field__input"
                                placeholder="example@example.com" id="email" value={email}/></div>
                    </div>
                    <div className="field field--stars field--vertical"><label for="rating"
                            className="field__label">Rating</label>
                        <div className="field__control">
                            <div className="field__stars">
                                <div className="field__star is-active"><label for="rating-1" className="field__star-label"><svg
                                            className="svg-icon svg-icon--star" width="19" height="20" viewBox="0 0 19 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z"
                                                fill="#FF553C"></path>
                                        </svg></label><input type="radio" id="rating-1" name="rating"
                                        className="field__input" value="1"/></div>
                                <div className="field__star is-active"><label for="rating-2" className="field__star-label"><svg
                                            className="svg-icon svg-icon--star" width="19" height="20" viewBox="0 0 19 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z"
                                                fill="#FF553C"></path>
                                        </svg></label><input type="radio" id="rating-2" name="rating"
                                        className="field__input" value="2"/></div>
                                <div className="field__star is-active"><label for="rating-3" className="field__star-label"><svg
                                            className="svg-icon svg-icon--star" width="19" height="20" viewBox="0 0 19 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z"
                                                fill="#FF553C"></path>
                                        </svg></label><input type="radio" id="rating-3" name="rating"
                                        className="field__input" value="3"/></div>
                                <div className="field__star is-active"><label for="rating-4" className="field__star-label"><svg
                                            className="svg-icon svg-icon--star" width="19" height="20" viewBox="0 0 19 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z"
                                                fill="#FF553C"></path>
                                        </svg></label><input type="radio" id="rating-4" name="rating"
                                        className="field__input" value="4"/></div>
                                <div className="field__star is-active"><label for="rating-5" className="field__star-label"><svg
                                            className="svg-icon svg-icon--star" width="19" height="20" viewBox="0 0 19 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.80729 0.655781C9.19147 -0.218594 9.8084 -0.218594 10.193 0.655781L12.6447 6.22902L18.1772 7.06861C19.0648 7.20264 19.2653 7.86154 18.6265 8.54377L14.588 12.8227L15.5787 18.9209C15.7303 19.8773 15.216 20.2677 14.4315 19.8067L9.50003 16.8973L4.56876 19.8067C3.78387 20.2677 3.26973 19.8773 3.42116 18.9209L4.41182 12.8227L0.373554 8.54377C-0.265227 7.86154 -0.0649666 7.20264 0.822905 7.06861L6.35495 6.22902L8.80729 0.655781Z"
                                                fill="#FF553C"></path>
                                        </svg></label><input type="radio" id="rating-5" name="rating"
                                        className="field__input" value="5"/></div>
                            </div><span className="field__box">5 / 5</span>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="field field--textarea"><label for="message" className="field__label">Review</label>
                        <div onChange={handleChange3} className="field__control"><textarea name="review" className="field__input"
                                placeholder="Your Review" id="message" value={review}></textarea></div>
                    </div>
                    <div className="form__actions"><button className="btn btn--block"
                            type="submit"><span></span><span></span><span></span><strong>Submit Review</strong></button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
  )
}
