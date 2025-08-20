import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../context/ThemeContext';
import { feedbackScreenStyles } from '../theme/styles';

const FeedbackScreen = () => {
  const { colors } = useTheme();
  const styles = feedbackScreenStyles(colors);
  const navigation = useNavigation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSend = () => {
    Alert.alert("متشکریم!", "پیام شما با موفقیت ارسال شد.");
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-forward-outline" size={28} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>پیشنهاد و انتقاد</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>نام و نام خانوادگی</Text>
        <TextInput
            style={styles.input}
            placeholder="نام خود را وارد کنید"
            placeholderTextColor={colors.textSecondary}
            value={form.name}
            onChangeText={text => setForm({...form, name: text})}
        />

        <Text style={styles.label}>ایمیل شما</Text>
        <TextInput
            style={styles.input}
            placeholder="example@mail.com"
            placeholderTextColor={colors.textSecondary}
            value={form.email}
            onChangeText={text => setForm({...form, email: text})}
            keyboardType="email-address"
        />

        <Text style={styles.label}>موضوع</Text>
        <TextInput
            style={styles.input}
            placeholder="موضوع پیام"
            placeholderTextColor={colors.textSecondary}
            value={form.subject}
            onChangeText={text => setForm({...form, subject: text})}
        />

        <Text style={styles.label}>پیام شما</Text>
        <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="پیام خود را اینجا بنویسید..."
            placeholderTextColor={colors.textSecondary}
            multiline
            value={form.message}
            onChangeText={text => setForm({...form, message: text})}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>ارسال پیام</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedbackScreen;