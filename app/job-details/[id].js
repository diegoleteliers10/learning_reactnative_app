import React from 'react'
import {Text, View, ActivityIndicator, ScrollView, SafeAreaView, RefreshControl} from 'react-native'
import {Stack, useRouter, useGlobalSearchParams} from 'expo-router'
import { useCallback, useState } from 'react'
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'

import {COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {

  const params = useGlobalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>JobDetails</Text>
    </View>
  )
}

export default JobDetails