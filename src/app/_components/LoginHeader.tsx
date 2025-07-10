import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Text } from '~/components/nativewindui/Text';

interface IProps {
  principalText: string;
  subText: string;
}

export const LoginHeader = ({ principalText, subText }: IProps) => {
  return (
    <View className="mb-8 items-center">
      <View className="mb-6 h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
        <MaterialCommunityIcons name="account" size={32} color="white" />
      </View>
      <Text className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{principalText}</Text>
      <Text className="text-center text-base text-gray-600 dark:text-gray-400">{subText}</Text>
    </View>
  );
};
