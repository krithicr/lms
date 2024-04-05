import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Option,
    Select,
    Typography
} from "@material-tailwind/react";
import { useRef, useState } from "react";

export function LearningPath() {
    const [type, setType] = useState('');
    const [instructor, setInstructor] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const anchorRef = useRef(null); 

    const handleTypeChange = (value) => {
        setType(value);
    };

    const handleInstructorChange = (value) => {
        setInstructor(value);
    };

    const handleStartDateChange = (value) => {
        setStartDate(value);
    };

    const handleEndDateChange = (value) => {
        setEndDate(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validation: Check if end date is before start date
        if (new Date(startDate) > new Date(endDate)) {
            alert("End date should not be before start date.");
            return; // Stop form submission if validation fails
        }

        // Handle form submission here using AJAX or any other method
        try {
            const response = await fetch('your_endpoint_url_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: type,
                    instructor: instructor,
                    start_date: startDate,
                    end_date: endDate
                }),
            });

            if (response.ok) {
                // If submission is successful, redirect to '/admin' page
                window.location.href = '/admin';
            } else {
                // Handle error if submission fails
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }

        // Clear form fields after submission
        setType('');
        setInstructor('');
        setStartDate('');
        setEndDate('');
    };

    const handleAddCourse = () => {
        // Navigate to '/course' URL when the button is clicked
        anchorRef.current.click();
    };

    return (
        <Card className=" w-full md:w-3/4 lg:w-2/4 xl:w-2/4 mx-auto ">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h5" color="white" className="mb-2">
                    Add Learning Path
                </Typography>
            </CardHeader>
            <CardBody>
                <form className='container p-6 bg-white rounded-lg 'onSubmit={handleSubmit}>
                <div className="mb-4">
                        <Select value={type} variant="outlined" label="Select Type" onChange={(e) => handleTypeChange(e.target.value)}>
                            <Option value='Course'>Course</Option>
                            <Option value="Assessment">Assessment</Option>
                            <Option value="Evaluation">Evaluation</Option>
                        </Select>
                    </div>
                    <div className='mb-4'>
                        <Input id="title" name="title" variant="outlined" label="Instructor Name" value={instructor}   onChange={(e) => handleInstructorChange(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <Input id="start_date" name="start_date" type="date" variant="outlined" label="Start date"  value={startDate}
                        onChange={(e) => handleStartDateChange(e.target.value)}  />
                    </div>
                    <div className='mb-4'>
                        <Input id="end_date" name="end_date" type="date" variant="outlined" label="End date" value={endDate}
                        onChange={(e) => handleEndDateChange(e.target.value)} />
                    </div>
                   

                    <div className="mb-4 flex justify-end">
                        <Button ripple={true} onClick={handleAddCourse}>
                        <a ref={anchorRef} href="/course" style={{ display: 'none' }} >  Add Course</a>
                            Add Topics
                            </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
