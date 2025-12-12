import mongoose from "mongoose";

const { User, Driver, Trip } = require(".././mongoose/models/schema");

export const resolvers = {
  Query: {
    users: () => User.find(),
    user: (_: any, args: { id: string }) => User.findById(args.id),

    drivers: () => Driver.find(),
    driver: (_: any, args: { id: string }) => Driver.findById(args.id),

    trips: () => Trip.find().populate("driver"),
    trip: (_: any, args: { id: string }) => Trip.findById(args.id).populate("driver"),
  },

  Mutation: {
    createUser: (_: any, args: { email: string; password: string }) =>
      new User({ email: args.email, password: args.password }).save(),

    deleteUser: (_: any, args: { id: string }) => User.findByIdAndDelete(args.id),

    createDriver: (
      _: any,
      args: { email: string; password: string; licenseNumber: string; idNumber: string; fullName: string }
    ) =>
      new Driver({
        email: args.email,
        password: args.password,
        licenseNumber: args.licenseNumber,
        idNumber: args.idNumber,
        fullName: args.fullName,
      }).save(),

    deleteDriver: (_: any, args: { id: string }) => Driver.findByIdAndDelete(args.id),

    createTrip: async (_: any, args: {  locations: any; date: string | number | Date; grade: any; }) => {
     
    
      const trip = await new Trip({
        locations: args.locations,
        date:args.date,
        grade: args.grade,
      }).save();
    
      await trip.populate("driver");
      return trip;
    },
    

    deleteTrip: (_: any, args: { id: string }) => Trip.findByIdAndDelete(args.id),
  },
};

module.exports = resolvers;
