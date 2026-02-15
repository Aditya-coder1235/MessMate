import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams ,useNavigate} from "react-router";

const MessInDetail = () => {
    const navigate=useNavigate()
    const { id } = useParams();
    const [mess, setMess] = useState(null);
    const[reviews,setReviews]=useState([])

    let userId=localStorage.getItem('userId')

    const [formData, setFormData] = useState({
        rating: "",
        comment: "",
        mess:id
    });

    const fetchAllreviews=async()=>{
        try {
            const res = await axios.get(
                `https://messmate-backend-r94e.onrender.com/api/review/getReview/${id}`,
                { withCredentials: true },
            );
            setReviews(res.data.reviews);
            // console.log(res.data.reviews);
            // alert("Review upload Successfully");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    }

    const deleteReview = async (id) => {
        try {
            const res = await axios.delete(
                `https://messmate-backend-r94e.onrender.com/api/review/delete/${id}`,
                { withCredentials: true },
            );
            // setReviews(res.data.reviews);
            console.log(res.data);
            // alert("Review upload Successfully");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    // console.log(reviews)

    const fetchById = async () => {
        try {
            const res = await axios.get(
                ` https://messmate-backend-r94e.onrender.com/api/mess/getById/${id}`,
                { withCredentials: true },
            );
            setMess(res.data.Mess);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    useEffect(() => {
        fetchById();
        fetchAllreviews()
    }, [id]);

    if (!mess) {
        return <div className="pt-32 text-center">Loading...</div>;
    }

    const createReviews=async()=>{
        try {
            const res = await axios.post(
                `https://messmate-backend-r94e.onrender.com/api/review/create`,
                formData,
                { withCredentials: true },
            );
            // setMess(res.data.Mess);
            // console.log(res.data)
            alert("Review upload Successfully");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    }

    const handleOnChange=(e)=>{
        let {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        createReviews()
    }

    // console.log(mess.images);

    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />

            <div className="max-w-4xl mx-auto px-4 pt-5 pb-24">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <div className="relative h-72 w-full overflow-hidden">
                            <img
                                src={mess.images}
                                alt={mess.messName}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/600x400?text=No+Image";
                                }}
                            />
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {mess.messName}
                            </h2>
                            <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700">
                                {mess.vegNonveg === "both"
                                    ? "Veg & NonVeg"
                                    : mess.vegNonveg}
                            </span>
                        </div>

                        <p className="text-gray-600">{mess.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <p>
                                <span className="font-medium">Address:</span>{" "}
                                {mess.address}, {mess.city}
                            </p>
                            <p>
                                <span className="font-medium">Price:</span> ₹
                                {mess.price}/month
                            </p>
                        </div>

                        {mess.owner && (
                            <div className="border-t pt-4">
                                <h3 className="font-semibold text-lg mb-2">
                                    Owner Details
                                </h3>
                                <p>Name: {mess.owner.name}</p>
                                <p>Phone: {mess.owner.phone}</p>
                                <p>Email: {mess.owner.email}</p>
                            </div>
                        )}
                        <div className="flex">
                            <a href={`tel:${mess.owner.phone}`}>
                                <button
                                    className="mt-4 b00 text-white py-3 rounded-md h700 transition w-40"
                                    style={{ backgroundColor: "#AD343E" }}
                                >
                                    Contact Mess Owner
                                </button>
                            </a>

                            <button
                                className="mt-4 ms-4 bg-e00 text-white py-3 rounded-md hold-700 transition w-40"
                                style={{ backgroundColor: "#AD343E" }}
                                onClick={() =>
                                    navigate(`/menuInDetail/${mess._id}`)
                                }
                            >
                                View Today Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-24">
                <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Ratings & Reviews
                    </h2>

                    <form
                        onSubmit={handleOnSubmit}
                        className=" rounded-lg p-4 space-y-4"
                    >
                        <h3 className="font-semibold text-lg text-gray-700">
                            Add Your Review
                        </h3>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="number"
                                min="1"
                                max="5"
                                placeholder="Rating (1–5)"
                                value={formData.rating}
                                name="rating"
                                onChange={handleOnChange}
                                required
                                className="w-full md:w-1/3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                            />

                            <input
                                type="text"
                                placeholder="Write your comment"
                                value={formData.comment}
                                name="comment"
                                onChange={handleOnChange}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-e600 text-white md:px-6 px-3 py-1 md:py-2 rounded-md hod-700 transition"
                            style={{ backgroundColor: "#AD343E" }}
                        >
                            Submit Review
                        </button>
                    </form>

                    <div className="space-y-4 pt-5">
                        {reviews.length === 0 ? (
                            <p className="text-gray-500 text-center">
                                No reviews yet. Be the first to review!
                            </p>
                        ) : (
                            reviews.map((review) => (
                                <div
                                    key={review._id}
                                    className="border rounded-lg p-4 shadow-sm"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="font-semibold text-gray-700">
                                            ⭐ {review.rating} / 5
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            {new Date(
                                                review.createdAt,
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <p className="text-gray-600">
                                        {review.comment}
                                    </p>

                                    {review.user && (
                                        <p className="mt-2 text-sm text-gray-500">
                                            — {review.user.name}
                                        </p>
                                    )}

                                    {userId === review.user._id && (
                                        <>
                                            <button
                                                className="bg-red-600 w-20 md:w-30 text-white py-1 md:py-2 rounded-lg hover:bg-red-700"
                                                onClick={() =>
                                                    deleteReview(
                                                        review.user._id,
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MessInDetail;
