import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from '~/components/Card';
import { Text } from '~/components/nativewindui/Text';
import { FormProvider, useForm, Form, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Login, loginSchema } from '../_schemas/login-schema';

interface ILoginForm {}

export const LoginForm = ({}: ILoginForm) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Sucesso!', 'Login realizado com sucesso!');
    }, 2000);
  };

  return (
    <FormProvider {...form}>
      <Card variant="glass" size="lg" className="mb-6">
        <Card.Content>
          <View className="gap-4">
            <View>
              <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                E-mail
              </Text>
              <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                <Controller
                  {...form}
                  name="password"
                  render={({ field }) => (
                    <>
                      <MaterialCommunityIcons
                        name="email"
                        size={20}
                        color="#9CA3AF"
                        style={{ marginRight: 12 }}
                      />
                      <TextInput
                        {...field}
                        className="flex-1 text-base text-gray-900 dark:text-white"
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </>
                  )}
                />
              </View>
            </View>

            <View>
              <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Senha
              </Text>
              <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                <MaterialCommunityIcons
                  name="lock"
                  size={20}
                  color="#9CA3AF"
                  style={{ marginRight: 12 }}
                />
                <Controller
                  {...form}
                  name="password"
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      className="flex-1 text-base text-gray-900 dark:text-white"
                      placeholder="Digite sua senha"
                      placeholderTextColor="#9CA3AF"
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                    />
                  )}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="ml-2">
                  <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity className="self-end">
              <Text className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Esqueci minha senha
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-row items-center justify-center rounded-xl bg-blue-600 py-4 shadow-lg ${
                isLoading ? 'opacity-70' : 'active:bg-blue-700'
              }`}
              onPress={handleSubmit}
              disabled={isLoading}
              activeOpacity={0.8}>
              {isLoading ? (
                <View className="flex-row items-center">
                  <View className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <Text className="text-base font-semibold text-white">Entrando</Text>
                </View>
              ) : (
                <View className="flex-row items-center">
                  <Text className="mr-2 text-base font-semibold text-white">Entrar</Text>
                  <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </FormProvider>
  );
};
