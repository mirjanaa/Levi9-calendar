import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Multiselect from 'multiselect-react-dropdown';


const Form = ({date}) => {
    const [allParticipants, setAllParticipants] = useState([]);
    
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [participants, setParticipants] = useState([]);

    const router = useRouter();
    const multiselectList = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then((res) => res.json())
            .then((data) => setAllParticipants(data));
    });

    const resetForm = (form) => {
        form.preventDefault();

        setTitle('');
        setTime('');
        setDescription('');
        setParticipants([]);
        multiselectList.current.resetSelectedValues();
    };

    const submitForm = (form) => {
        form.preventDefault();

        if(validateForm()){
            const newMeeting = {
                title: title,
                time: time,
                description: description,
                participants: participants.map(x => x.name),
                day: date
            };
            postMeeting(newMeeting);
            resetForm(form);
        }
        else{
            window.alert('All fields are required!');
        }
    };

    const postMeeting = (newMeeting) => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMeeting),
        };

        fetch('http://localhost:5000/api/meetings', options)
            .then((res) => res.json())
            .then((data) => router.push('/meeting/' + data._id));
    };

    const validateForm = () => {
        let valid = true;
        if (title.length <= 0)
            valid = false;
        if (time.length <= 0)
            valid = false;
        if (description.length <= 0)
            valid = false;

        return valid;
    };

    return (
        <form onSubmit={(el) => submitForm(el)}>
            <h2>Schedule a new meeting for June/{date}/2022</h2>
            <div>
                <label>Title: </label>
                <input
                    type='text'
                    placeholder='Enter title...'
                    value={title}
                    onChange={(el) => setTitle(el.target.value)}
                />
            </div>
            <div>
                <label>Time: </label>
                <input
                    type='text'
                    placeholder='Enter time...'
                    value={time}
                    onChange={(el) => setTime(el.target.value)}
                />
            </div>
            <div>
                <label>Description: </label>
                <input
                    type='text'
                    placeholder='Enter description...'
                    value={description}
                    onChange={(el) => setDescription(el.target.value)}
                />
            </div>
            <div>
                <label>Add participants: </label>
                <Multiselect
                    options={allParticipants}
                    selectedValues={[]}
                    onSelect={(selectedList) => 
                        setParticipants(selectedList)
                    }
                    onRemove={(selectedList) =>
                        setParticipants(selectedList)
                    }
                    displayValue='name'
                    ref={multiselectList}
                />
            </div>
            <button type='submit'>
                Add
            </button>
            <button onClick={(el) => resetForm(el)}>
                Cancel
            </button>
        </form>
    );
};

export default Form;