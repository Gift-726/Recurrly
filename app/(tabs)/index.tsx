// import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css"
import {  Text, View } from "react-native";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Recurly
        
      </Text>
      <Link href="/onboarding" className="mt-4 text-blue-500">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 text-blue-500">
        Go to signmin
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 text-blue-500">
        Go to oSignup
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 text-blue-500">
        Spotify Subscription
      </Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },

      }} className="mt-4 text-blue-500">
        Claude Subscription
      </Link>
    </View>
  );
}