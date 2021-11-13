import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Firebase/firebaseInit";


initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const [admin , setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // ======================register with email & password=================//

    const registerUser = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email,name);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                history.push('/'); 
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsloading(false));
    }

    // ======================Login with email & password===============//

    const loginUser = (email, password, redirectLink) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                redirectLink();

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));

    }

    //=========================== Login With google===============//

    const loginWithGoogle = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError('');
                putUser(user.email, user.displayName)
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));

    }
    // ==============================Logout==================== //

    const logOut = (history) => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                history.push('/');
            })
            .finally(() => setIsloading(false));
    }

    // ==================Manage User==================//

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false)
        })
    }, [])

    // ==================Send User Database==============//

    const saveUser=(email, displayName)=>{
        const user = {email,displayName};
        axios.post('https://intense-sierra-15995.herokuapp.com/user',user)
        .then()
    }
    
    const putUser = (email, displayName)=>{
        const user = {email,displayName};
        axios.put('https://intense-sierra-15995.herokuapp.com/user',user)
        .then()
    }
    // =============== get Admin ============//
    
    useEffect(()=>{
        axios.get(`https://intense-sierra-15995.herokuapp.com/user/${user.email}`)
        .then(res=>{
            setAdmin(res.data.admin);
           
        })
    },[user.email])

    return {
        user,
        admin,
        error,
        loginWithGoogle,
        logOut,
        isLoading,
        registerUser,
        loginUser

    }
}

export default useFirebase;