import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Product/Products";
import Header from "../components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/features/auth/userActions";

const Home = () => {
  const dispatch=useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  

  useEffect(() => {
    dispatch(getUserData());
   
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
