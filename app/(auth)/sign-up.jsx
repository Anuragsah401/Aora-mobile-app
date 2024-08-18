import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons";
import { Link } from "expo-router";
import {createUser} from "../../lib/appwrite";


const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    createUser(email, password, userName)
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles="mt-10"
           
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButtons
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg text-secondary font-pregular"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp