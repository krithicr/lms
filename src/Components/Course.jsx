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
import { useState } from "react";
import axiosInstance from '../utils/api.js';

export function Course() {
    const [courseData, setCourseData] = useState({
        title: '',
        level: 'basic'
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleAddTopics = () => {
        axiosInstance.post('/your-endpoint-url', courseData)
            .then(response => {
                if (response.status === 200) {
                    // Redirect or show a success message
                } else {
                    // Handle errors
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <Card className=" w-full md:w-3/4 lg:w-2/4 xl:w-2/4 mx-auto ">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h5" color="white" className="mb-2">
                    Add Course
                </Typography>
            </CardHeader>
            <CardBody>
                <form className='container p-6 bg-white rounded-lg'>
                    <div className='mb-4'>
                        <Input id="title" name="title" variant="outlined" label="Course Name" value={courseData.title} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <Select variant="outlined" label="Select Version">
                            <Option value='basic'>Basic</Option>
                            <Option value="Intermediate">Intermediate</Option>
                            <Option value="Advance">Advance</Option>
                        </Select>
                    </div>

                    <div className="mb-4 flex justify-end">
                        <Button ripple={true} onClick={handleAddTopics}>Add Topics</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
