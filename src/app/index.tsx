import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Container } from '~/components/Container';
import { LoginHeader } from './_components/LoginHeader';
import { LoginForm } from './_components/LoginForm';
import { RegisterForm } from './_components/RegisterForm';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSocialLogin = (provider: string) => {
    Alert.alert('Social Login', `Login com ${provider} em desenvolvimento`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container className="flex-1 justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12 dark:from-gray-900 dark:to-gray-800">
          <LoginHeader
            principalText={isLogin ? 'Bem-vindo ao HomeFlex' : 'Criar Conta'}
            subText={
              isLogin
                ? 'Entre na sua conta para continuar'
                : 'Preencha os dados para criar sua conta'
            }
          />

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <View className="mb-6 flex-row items-center">
            <View className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
            <Text className="mx-4 text-sm text-gray-500 dark:text-gray-400">Ou continue com</Text>
            <View className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
          </View>

          <View className="mb-8 flex-row gap-5">
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center rounded-xl border border-gray-200 bg-white py-3 shadow-sm active:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:active:bg-gray-700"
              onPress={() => handleSocialLogin('Google')}
              activeOpacity={0.8}>
              <View className="mr-2 h-5 w-5 rounded bg-red-500" />
              <Text className="font-medium text-gray-700 dark:text-gray-300">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center rounded-xl border border-gray-200 bg-white py-3 shadow-sm active:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:active:bg-gray-700"
              onPress={() => handleSocialLogin('Apple')}
              activeOpacity={0.8}>
              <View className="mr-2 h-5 w-5 rounded bg-black dark:bg-white" />
              <Text className="font-medium text-gray-700 dark:text-gray-300">Apple</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-center">
            <Text className="text-base text-gray-600 dark:text-gray-400">
              {isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text className="text-base font-semibold text-blue-600 dark:text-blue-400">
                {isLogin ? 'Cadastre-se' : 'Faça login'}
              </Text>
            </TouchableOpacity>
          </View>

          {!isLogin && (
            <View className="mt-6">
              <Text className="text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                Ao criar uma conta, você concorda com nossos{' '}
                <Text className="text-blue-600 underline dark:text-blue-400">Termos de Uso</Text> e{' '}
                <Text className="text-blue-600 underline dark:text-blue-400">
                  Política de Privacidade
                </Text>
              </Text>
            </View>
          )}
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
