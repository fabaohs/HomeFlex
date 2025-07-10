import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from '~/components/nativewindui/Text';
import { RegisterUser, registerUserSchema } from '../_schemas/register-schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegisterForm = () => {
  const form = useForm<RegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <View>
        <Text>teste</Text>
        <View>
          <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</Text>
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
          <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Senha</Text>
          <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
            <MaterialCommunityIcons
              name="lock"
              size={20}
              color="#9CA3AF"
              style={{ marginRight: 12 }}
            />
            <Controller
              {...form}
              name="name"
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
        <View>
          <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirmar senha
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
              name="confirmPassword"
              render={({ field }) => (
                <TextInput
                  {...field}
                  className="flex-1 text-base text-gray-900 dark:text-white"
                  placeholder="Confirme sua senha"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                />
              )}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="ml-2">
              <MaterialCommunityIcons
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
