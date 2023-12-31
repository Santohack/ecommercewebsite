import asyncHandler from "../middleWere/asyncHandler.js";
import Order from "../models/orderModel/index.js";



//@dec create new order
//@route POST /api/orders
//@access private
const addOrderItems = asyncHandler(async (req, res) => {
    const  { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body
     

    if( orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems : orderItems.map((x)=>({...x, product: x._id,_id: undefined})),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()
    res.status(201).json(createdOrder)
    }

    
})

//@dec get order by id
//@route GET /api/orders/:id
//@access private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if(order){
        res.json(order)
    }
    else{
        res.status(404)
        throw new Error('Order not found')
    }
  
})

//@dec update order to paid
//@route PUT /api/orders/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send ('updateOrderToPaid')
})

// @dec get logged in user orders
// @route GET /api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({user: req.user._id})
    res.json(orders)
})

// @dec get all orders
// @route GET /api/orders
// @access private/admin
const getOrders = asyncHandler(async (req, res) => {
    res.send ('getOrders')
})

// @dec update order to delivered
// @route PUT /api/orders/:id/deliver
// @access private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send ('updateOrderToDelivered')
})

export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
    updateOrderToDelivered

}