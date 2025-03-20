import mongoose from 'mongoose';

const subscriptionSchema = new mongoose({
   name: {
      trim: true,
      minLength: 2,
      maxLength: 100
   },
   price: {
      type: Number,
      required: [true, 'Subscription is required'],
      min: [0, 'Price must be greater than 0'],
      maxLength: 100
   }, 
   currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      default: 'USD'
   },
   frequency: {
      type: 'String',
      enum: ['Daily', 'Weekly', 'Monthly', 'Yearly']
   },
   category: {
      type: 'String',
      enum: ['Sports', 'News', 'entertainment', 'Lifestyle', 'Technology', 'Finance', 'Politics', 'Other']
   },
   paymentMethod: {
      type: String,
      required: true, 
      trim: true
   },
   status: {
      type: String, 
      enum: ['active', 'cancelled', 'expired'],
      default: 'active'
   },
   startDate: {
      type: Date,
      required: true,
      validate: {
         validator: (value) => value <= new Date(),
         message: 'Start Date must be in the past'
      }
   },
   renewalDate: {
      type: Date,
      required: true,
      validate: {
         validator: function(value) {
           return value > this.startDate
         },
         message: 'Renewal Date must be after the start date'
      }
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      index: true
   }
}, {timestamps: true}  
)

// Auto-calculate renewal date if missing 

subscriptionSchema.pre('save', function(next) {
   if(!renewalDate) {
     const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365
     };

     this.renewalDate = new Date(this.startDate);
     this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
   }

   // Auto-update the status if renewal date has passed
   if(this.renewalDate < new Date()) {
      this.status = 'Expired'
   }

   next();
})


const Subscription = mongoose.model('Subscription', subscriptionSchema )

export default Subscription;