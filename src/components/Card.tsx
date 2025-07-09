import type React from 'react';
import type { ReactNode } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

interface CardComponentProps {
  children: ReactNode;
  className?: string;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled' | 'gradient' | 'glass';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

interface CardComposition {
  Header: React.FC<CardComponentProps>;
  Title: React.FC<CardComponentProps & { level?: 1 | 2 | 3 }>;
  Subtitle: React.FC<CardComponentProps>;
  Description: React.FC<CardComponentProps>;
  Content: React.FC<CardComponentProps>;
  Footer: React.FC<
    CardComponentProps & {
      onActionPress?: () => void;
      actionText?: string;
      actionVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
      actionSize?: 'sm' | 'md' | 'lg';
      actionDisabled?: boolean;
      secondaryActionText?: string;
      onSecondaryActionPress?: () => void;
    }
  >;
  Badge: React.FC<
    CardComponentProps & {
      variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
      size?: 'sm' | 'md';
    }
  >;
}

const Header: React.FC<CardComponentProps> = ({ children, className }) => {
  return <View className={`mb-4 ${className || ''}`}>{children}</View>;
};

const Title: React.FC<CardComponentProps & { level?: 1 | 2 | 3 }> = ({
  children,
  className,
  level = 1,
}) => {
  const getTitleStyles = () => {
    switch (level) {
      case 1:
        return 'text-2xl font-bold leading-tight';
      case 2:
        return 'text-xl font-semibold leading-snug';
      case 3:
        return 'text-lg font-medium leading-normal';
      default:
        return 'text-xl font-semibold leading-snug';
    }
  };

  return (
    <Text
      className={`${getTitleStyles()} mb-1 text-gray-900 dark:text-gray-50 ${className || ''}`}
      accessibilityRole="header">
      {children}
    </Text>
  );
};

const Subtitle: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <Text
      className={`mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 ${className || ''}`}>
      {children}
    </Text>
  );
};

const Description: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <Text
      className={`text-base leading-relaxed text-gray-700 dark:text-gray-300 ${className || ''}`}>
      {children}
    </Text>
  );
};

const Content: React.FC<CardComponentProps> = ({ children, className }) => {
  return <View className={`flex-1 ${className || ''}`}>{children}</View>;
};

const Badge: React.FC<
  CardComponentProps & {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md';
  }
> = ({ children, className, variant = 'default', size = 'sm' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800';
      case 'error':
        return 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800';
      case 'info':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700';
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'success':
        return 'text-green-800 dark:text-green-200';
      case 'warning':
        return 'text-amber-800 dark:text-amber-200';
      case 'error':
        return 'text-red-800 dark:text-red-200';
      case 'info':
        return 'text-blue-800 dark:text-blue-200';
      default:
        return 'text-gray-800 dark:text-gray-200';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'md':
        return 'px-3 py-1.5 text-sm';
      default:
        return 'px-2 py-1 text-xs';
    }
  };

  return (
    <View
      className={`${getVariantStyles()} ${getSizeStyles()} self-start rounded-full border ${className || ''}`}>
      <Text className={`${getTextStyles()} font-medium`}>{children}</Text>
    </View>
  );
};

const Footer: React.FC<
  CardComponentProps & {
    onActionPress?: () => void;
    actionText?: string;
    actionVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    actionSize?: 'sm' | 'md' | 'lg';
    actionDisabled?: boolean;
    secondaryActionText?: string;
    onSecondaryActionPress?: () => void;
  }
> = ({
  children,
  className,
  onActionPress,
  actionText = 'Ação',
  actionVariant = 'primary',
  actionSize = 'md',
  actionDisabled = false,
  secondaryActionText,
  onSecondaryActionPress,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const getActionButtonStyles = () => {
    const baseStyles =
      'rounded-lg transition-all duration-200 flex-row items-center justify-center';

    switch (actionVariant) {
      case 'primary':
        return `${baseStyles} bg-blue-600 active:bg-blue-700 shadow-sm ${actionDisabled ? 'opacity-50' : ''}`;
      case 'secondary':
        return `${baseStyles} bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:active:bg-gray-600 ${actionDisabled ? 'opacity-50' : ''}`;
      case 'outline':
        return `${baseStyles} border-2 border-blue-600 bg-transparent active:bg-blue-50 dark:active:bg-blue-900/20 ${actionDisabled ? 'opacity-50' : ''}`;
      case 'ghost':
        return `${baseStyles} bg-transparent active:bg-gray-100 dark:active:bg-gray-800 ${actionDisabled ? 'opacity-50' : ''}`;
      case 'destructive':
        return `${baseStyles} bg-red-600 active:bg-red-700 shadow-sm ${actionDisabled ? 'opacity-50' : ''}`;
      default:
        return `${baseStyles} bg-blue-600 active:bg-blue-700 shadow-sm ${actionDisabled ? 'opacity-50' : ''}`;
    }
  };

  const getActionTextStyles = () => {
    switch (actionVariant) {
      case 'primary':
        return 'text-white font-semibold';
      case 'secondary':
        return 'text-gray-700 dark:text-gray-200 font-medium';
      case 'outline':
        return 'text-blue-600 dark:text-blue-400 font-semibold';
      case 'ghost':
        return 'text-gray-700 dark:text-gray-200 font-medium';
      case 'destructive':
        return 'text-white font-semibold';
      default:
        return 'text-white font-semibold';
    }
  };

  const getActionSizeStyles = () => {
    switch (actionSize) {
      case 'sm':
        return 'px-3 py-2 min-h-[36px]';
      case 'lg':
        return 'px-6 py-3.5 min-h-[48px]';
      default:
        return 'px-4 py-2.5 min-h-[40px]';
    }
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className={`mt-6 border-t border-gray-100 pt-4 dark:border-gray-800 ${className || ''}`}>
      {children && <View className="mb-4">{children}</View>}

      <View className="flex-row items-center justify-end space-x-3">
        {secondaryActionText && onSecondaryActionPress && (
          <TouchableOpacity
            className="rounded-lg bg-transparent px-4 py-2.5 active:bg-gray-100 dark:active:bg-gray-800"
            onPress={onSecondaryActionPress}
            activeOpacity={0.7}>
            <Text className="font-medium text-gray-600 dark:text-gray-400">
              {secondaryActionText}
            </Text>
          </TouchableOpacity>
        )}

        {onActionPress && (
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              className={`${getActionButtonStyles()} ${getActionSizeStyles()}`}
              onPress={actionDisabled ? undefined : onActionPress}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={0.8}
              disabled={actionDisabled}
              accessibilityRole="button"
              accessibilityState={{ disabled: actionDisabled }}>
              <Text className={getActionTextStyles()}>{actionText}</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const Card: React.FC<CardProps> & CardComposition = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  interactive = false,
  disabled = false,
  onPress,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (disabled) {
      Animated.timing(opacityAnim, {
        toValue: 0.6,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [disabled, opacityAnim]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white dark:bg-gray-900 shadow-2xl shadow-gray-900/10 dark:shadow-black/20 border-0';
      case 'outlined':
        return 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-sm';
      case 'filled':
        return 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm';
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 shadow-lg';
      case 'glass':
        return 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-xl';
      default:
        return 'bg-white dark:bg-gray-900 shadow-lg shadow-gray-900/5 dark:shadow-black/10 border border-gray-200 dark:border-gray-800';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return 'p-3 m-1 rounded-lg';
      case 'sm':
        return 'p-4 m-1.5 rounded-xl';
      case 'lg':
        return 'p-6 m-3 rounded-2xl';
      case 'xl':
        return 'p-8 m-4 rounded-3xl';
      default:
        return 'p-5 m-2 rounded-xl';
    }
  };

  const getInteractiveStyles = () => {
    if (interactive || onPress) {
      return 'active:scale-[0.98] transition-transform duration-150';
    }
    return '';
  };

  const handlePressIn = () => {
    if (interactive || onPress) {
      Animated.spring(scaleAnim, {
        toValue: 0.98,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (interactive || onPress) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const CardWrapper = interactive || onPress ? TouchableOpacity : View;

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        opacity: opacityAnim,
      }}>
      <CardWrapper
        className={`${getVariantStyles()} ${getSizeStyles()} ${getInteractiveStyles()} ${className || ''}`}
        onPress={disabled ? undefined : onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.95}
        disabled={disabled}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityState={{ disabled }}>
        {children}
      </CardWrapper>
    </Animated.View>
  );
};

Card.Header = Header;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Content = Content;
Card.Footer = Footer;
Card.Description = Description;
Card.Badge = Badge;

export default Card;
