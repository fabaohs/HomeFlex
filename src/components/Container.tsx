import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';

export const Container = ({
  className = '',
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView style={styles.container} className={className}>
      <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
