import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Card from '~/components/Card';
import { Container } from '~/components/Container';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Sucesso!',
        isLogin ? 'Login realizado com sucesso!' : 'Conta criada com sucesso!'
      );
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert('Social Login', `Login com ${provider} em desenvolvimento`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Container className="flex-1 justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12 dark:from-gray-900 dark:to-gray-800">
          <View className="mb-8 items-center">
            <View className="mb-6 h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
              <MaterialCommunityIcons name="account" size={32} color="white" />
            </View>
            <Text className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {isLogin ? 'Bem-vindo ao HomeFlex!' : 'Criar Conta'}
            </Text>
            <Text className="text-center text-base text-gray-600 dark:text-gray-400">
              {isLogin
                ? 'Entre na sua conta para continuar'
                : 'Preencha os dados para criar sua conta'}
            </Text>
          </View>

          <Card variant="glass" size="lg" className="mb-6">
            <Card.Content>
              <View className="gap-4">
                {!isLogin && (
                  <View>
                    <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nome completo
                    </Text>
                    <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                      <MaterialCommunityIcons
                        name="account"
                        size={20}
                        color="#9CA3AF"
                        style={{ marginRight: 12 }}
                      />
                      <TextInput
                        className="flex-1 text-base text-gray-900 dark:text-white"
                        placeholder="Digite seu nome completo"
                        placeholderTextColor="#9CA3AF"
                        value={formData.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                        autoCapitalize="words"
                      />
                    </View>
                  </View>
                )}

                <View>
                  <Text className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    E-mail
                  </Text>
                  <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                    <MaterialCommunityIcons
                      name="email"
                      size={20}
                      color="#9CA3AF"
                      style={{ marginRight: 12 }}
                    />
                    <TextInput
                      className="flex-1 text-base text-gray-900 dark:text-white"
                      placeholder="Digite seu e-mail"
                      placeholderTextColor="#9CA3AF"
                      value={formData.email}
                      onChangeText={(value) => handleInputChange('email', value)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
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
                    <TextInput
                      className="flex-1 text-base text-gray-900 dark:text-white"
                      placeholder="Digite sua senha"
                      placeholderTextColor="#9CA3AF"
                      value={formData.password}
                      onChangeText={(value) => handleInputChange('password', value)}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      className="ml-2">
                      <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={20}
                        color="#9CA3AF"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {!isLogin && (
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
                      <TextInput
                        className="flex-1 text-base text-gray-900 dark:text-white"
                        placeholder="Confirme sua senha"
                        placeholderTextColor="#9CA3AF"
                        value={formData.confirmPassword}
                        onChangeText={(value) => handleInputChange('confirmPassword', value)}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
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
                )}

                {isLogin && (
                  <TouchableOpacity className="self-end">
                    <Text className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Esqueci minha senha
                    </Text>
                  </TouchableOpacity>
                )}

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
                      <Text className="text-base font-semibold text-white">
                        {isLogin ? 'Entrando...' : 'Criando conta...'}
                      </Text>
                    </View>
                  ) : (
                    <View className="flex-row items-center">
                      <Text className="mr-2 text-base font-semibold text-white">
                        {isLogin ? 'Entrar' : 'Criar conta'}
                      </Text>
                      <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>

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
