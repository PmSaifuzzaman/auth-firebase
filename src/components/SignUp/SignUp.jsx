import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";



const SignUp = () => {
    const [signUpErrorMessege, setSignupErrorMessege] = useState('');
    const [signedUpUser, setSignedUpUser] = useState('')
    const handleSignUp = e => {
       
        e.preventDefault();
        
        // console.log('Form submitting');
        const givenEmail = e.target.email.value;
        const givenPass = e.target.password.value;
        console.log(givenEmail, givenPass);
        setSignupErrorMessege('');
        setSignedUpUser('');
        
        createUserWithEmailAndPassword(auth, givenEmail, givenPass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            setSignedUpUser('user created successfully');
        })
        .catch((error) =>{
            
            setSignupErrorMessege(error.message);
            
        })

    }

    return (
        <div>
            <h3>This is Sign up page</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                            {
                                signUpErrorMessege && <p className="text-red-700">{signUpErrorMessege}</p>
                            }
                            {
                                signedUpUser && <p>{signedUpUser}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;