import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { useNavigate } from 'react-router-dom'


const Product = ({ post, isLoggedIn }) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCart = () => {
        if (isLoggedIn) {
            dispatch(add(post));
            toast.success("Item added to Cart");
        }
        else {
            navigate('/login');
        }

    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-md shadow-black hover:shadow-xl hover:shadow-black">
            <div>
                <p className=" text-white font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} alt="itemImage" className="h-full w-full " />
            </div>

            <div className="flex justify-between gap-8 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-bold text-2xl">${post.price}</p>
                </div>

                {
                    cart.some((p) => p.id === post.id) ?
                        (<button
                            className="text-white border-2 border-white rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in bg-red-600"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }
            </div>


        </div>
    );
};

export default Product;
