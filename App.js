import React, { useCallback, useRef, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Appbar, PaperProvider } from 'react-native-paper';
const readText =
  'THE CONSTITUTION (THIRTY-SIXTH AMENDMENT) ACT, 1975\n\nStatement of Objects and Reasons appended to the Constitution (Thirty-eighth Amendment) Bill, 1975 which was enacted as the Constitution (Thirty-sixth Amendment) Act, 1975\n\nSTATEMENT OF OBJECTS AND REASONS\n\nThe Sikkim Assembly unanimously adopted a resolution on the 10th April, 1975 which, inter alia, noted the persistent harmful activities of the Chogyal which were aimed at undermining the responsible democratic Government set up under the provisions of the May 8 Agreement of 1973 and the Government of Sikkim Act, 1974. The Resolution declared that the Assembly had satisfied itself that these activities of the Chogyal not only violated the objectives of the Agreement of May 8, 1973, but also ran counter to the wishes of the people of Sikkim and impeded their democratic development and participation in the political and economic life of India. Accordingly the Assembly solemnly declared and resolved that "The institution of the Chogyal is hereby abolished and Sikkim shall henceforth be a constituent unit of India, enjoying a democratic and fully responsible Government"\n\n2. The Assembly also resolved that this Resolution be submitted to the people of Sikkim forthwith for their approval. A special opinion poll conducted by the Government of Sikkim on the 14th April, 1975 resulted in a total of 59,637 votes in favour and 1,496 votes against the Resolution out of a total electorate of approximately 97,000.\n\n3. The result of this poll was communicated to the Government of India by the Chief Minister of Sikkim on the 15th April, 1975. The Chief Minister on behalf of the Council of Ministers strongly requested the Government of India to make an immediate response and accept the above decision, taking, as has been requested in the Assembly Resolution of the 10th April, 1975, such measures as may be necessary and appropriate to implement the decision as early as possible.\n\n4. The Chief Minister and other Ministers of Sikkim also visited New Delhi on the 16th-17th April, 1975 and urged the Government of India to take immediate action in this behalf.\n\n5. Accordingly, it is proposed to include Sikkim as a full-fledged State in the First Schedule to the Constitution and to allot to Sikkim one seat in the Council of States and one seat in the House of the People. It is also proposed to insert a new article containing the provisions considered necessary to meet the special circumstances and needs of Sikkim.\n\n6. The Bill seeks to achieve the above objects.\n\nNEW DELHI; Y. B. CHAVAN.\nThe 19th April, 1975.\n\n\nTHE CONSTITUTION (THIRTY-SIXTH AMENDMENT) ACT, 1975\n[16th May, 1975.]\n\nAn Act further to amend the Constitution of India.\n\nBE it enacted by Parliament in the Twenty-sixth Year of the Republic of India as follows:-\n\n1. Short title and commencement.-(1) This Act may be called the Constitution (Thirty-sixth Amendment) Act, 1975.\n\n(2) It shall be deemed to have come into force on the date_668 on which the Bill for this Act [introduced in the House of the People as the Constitution (Thirty-eighth Amendment) Bill, 1975], as passed by the House of the People, is passed by the Council of States.\n\n2. Amendment of First Schedule.-In the First Schedule to the Constitution, under the heading "I. THE STATES", after entry 21, the following entry shall be inserted namely:-\n\n"22. Sikkim The territories which immediately before the commencement of the Constitution (Thirty-sixth Amendment) Act, 1975, were comprised in Sikkim.".\n\n3. Insertion of new article 371F.-After article 371E of the Constitution, the following article shall be inserted, namely:-\n\n"371F. Special provisions with respect to the State of Sikkim.- Notwithstanding anything in this Constitution,-\n\n(a) the Legislative Assembly of the State of Sikkim shall consist of not less than thirty members;\n\n(b) as from the date of commencement of the Constitution (Thirty-sixth Amendment) Act, 1975 (hereafter in this article referred to as the appointed day)-\n(i) the Assembly for Sikkim formed as a result of the elections held in Sikkim in April, 1974 with thirty-two members elected in the said elections (hereinafter referred to as the sitting members) shall be deemed to be the Legislative Assembly of the State of Sikkim duly constituted under this Constitution;\n(ii) the sitting members shall be deemed to the members of the Legislative Assembly of the State of Sikkim duly elected under this Constitution; and\n(iii) the said Legislative Assembly of the State of Sikkim shall exercise the powers and perform the functions of the Legislative Assembly of a State under this Constitution;\n\n(c) in the case of the Assembly deemed to be the Legislative Assembly of the State of Sikkim under clause (b), the references to the period of five years in clause (1) of article 172 shall be construed as references to a period of four years and the said period of four years shall be deemed to commence from the appointed day;\n\n(d) until other provisions are made by Parliament by law, there shall be allotted to the State of Sikkim one seat in the House of the People and the State of Sikkim shall form one parliamentary constituency to be called the parliamentary constituency for Sikkim;\n\n(e) the representative of the State of Sikkim in the House of the People in existence on the appointed day shall be elected by the members of the Legislative Assembly of the State of Sikkim;\n\n(f) Parliament may, for the purpose of protecting the rights and interests of the different sections of the population of Sikkim make provision for the number of seats in the Legislative Assembly of the State of Sikkim which may be filled by candidates belonging to such sections and for the delimitation of the assembly constituencies from which candidates belonging to such sections alone may stand for election to the Legislative Assembly of the State of Sikkim;\n\n(g) the Governor of Sikkim shall have special responsibility for peace and for an equitable arrangement for ensuring the social and economic advancement of different sections of the population of Sikkim and in the discharge of his special responsibility under this clause, the Governor of Sikkim shall, subject to such directions as the President may, from time to time, deem fit to issue, act in his discretion;\n\n(h) all property and assets (whether within or outside the territories comprised in the State of Sikkim) which immediately before the appointed day were vested in the Government of Sikkim or in any other authority or in any person for the purposes of the Government of Sikkim shall, as from the appointed day, vest in the Government of the State of Sikkim;\n\n(i) the High Court functioning as such immediately before the appointed day in the territories comprised in the State of Sikkim shall, on and from the appointed day, be deemed to be the High Court for the State of Sikkim;\n\n(j) all courts of civil, criminal and revenue jurisdiction, all authorities and all officers, judicial, executive and ministerial, throughout the territory of the State of Sikkim shall continue on and from the appointed day to exercise their respective functions subject to the provisions of this Constitution;\n\n(k) all laws in force immediately before the appointed day in the territories comprised in the State of Sikkim or any part thereof shall continue to be in force therein until amended or repealed by a competent Legislature or other competent authority;\n\n(l) for the purpose of facilitating the application of any such law as is referred to in clause (k) in relation to the administration of the State of Sikkim and for the purpose of bringing the provisions of any such law into accord with the provisions of this Constitution, the President may, within two years from the appointed day, by order, make such adaptations and modifications of the law, whether by way of repeal or amendment, as may be necessary or expedient, and thereupon, every such law shall have effect subject to the adaptations and modifications so made, and any such adaptation or modification shall not be questioned in any court of law;\n\n(m) neither the Supreme Court nor any other court shall have jurisdiction in respect of any dispute or other matter arising out of any treaty, agreement, engagement or other similar instrument relating to Sikkim which was entered into or executed before the appointed day and to which the Government of India or any of its predecessor Governments was a party, but nothing in this clause shall be construed to derogate from the provisions of article 143;\n\n(n) the President may, by public notification, extend with such restrictions or modifications as he thinks fit to the State of Sikkim any enactment which is in force in a State in India at the date of the notification;\n\n(o) if any difficulty arises in giving effect to any of the foregoing provisions of this article, the President may, by order, do anything (including any adaptation or modification of any other article) which appears to him to be necessary for the purpose of removing that difficulty:\n\nProvided that no such order shall be made after the expiry of two years from the appointed day;\n\n(p) all things done and all actions taken in or in relation to the State of Sikkim or the territories comprised therein during the period commencing on the appointed day and ending immediately before the date on which the Constitution (Thirty-sixth Amendment) Act, 1975, receives the assent of the President shall, in so far as they are in conformity with the provisions of this Constitution as amended by the Constitution (Thirty-sixth Amendment) Act, 1975, be deemed for all purposes to have been validly done or taken under this Constitution as so amended."\n\n4. Amendment of Fourth Schedule.-In the Fourth Schedule to the Constitution, in the Table,-\n\n(a) after entry 21, the following entry shall be inserted, namely:--- "22. Sikkim 1";\n\n(b) existing entries 22 to 25 shall be renumbered as entries 23 to 26 respectively;\n\n(c) for the figures "231", the figures "232" shall be substituted.\n\n5. Consequential amendments.-The following consequential amendments shall be made in the Constitution, namely:-\n\n(a) article 2A shall be omitted;\n\n(b) in article 80, in clause (1), the words and figure "Subject to the provisions of paragraph 4 of the Tenth Schedule," shall be omitted;\n\n(c) in article 81, in clause (1), the words and figure "and paragraph 4 of the Tenth Schedule" shall be omitted;\n\n(d) the Tenth Schedule shall be omitted.';

function App() {
  // hooks
  const sheetRef = useRef(null);
  const insets = useSafeAreaInsets();
  // const insets = useSafeAreaInsets();

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ['33%', '50%', '90%', '100%'], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderHeader = useCallback(
    () => (
      <View style={[styles.headerContainer, { paddingTop: 0 }]}>
        <TouchableOpacity
          style={{
            height: 24,
            width: 24,
            alignItems: 'center',
            justifyContent: 'center',
            // paddingHorizontal: 12,
          }}
        >
          <MaterialIcons
            name="heart"
            size={24}
            color="black"
            // style={{ resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thirty-Sixth Amendment</Text>
      </View>
    ),
    []
  );
  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <>
          <StatusBar backgroundColor="#F7F7F7" barStyle="dark-content" />
          {/* <ScreenHeader /> */}
          <View style={styles.container}>
            {/* <ScreenHeader /> */}
            {(insets) => <View style={{ paddingTop: insets.top }} />}
            <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
            <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
            <Button title="Close" onPress={() => handleClosePress()} />
            <BottomSheet
              ref={sheetRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
              // enableDynamicSizing={true}
              handleIndicatorStyle={{ display: 'none' }}
              handleComponent={BSHeader}
            >
              <BottomSheetScrollView
                contentContainerStyle={styles.contentContainer}
              >
                <Text
                  style={{
                    paddingVertical: 20,
                    marginHorizontal: 15,
                    fontSize: 17.5,
                  }}
                >
                  {readText}
                </Text>
              </BottomSheetScrollView>
            </BottomSheet>
          </View>
        </>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
function BSHeader() {
  return (
    <Appbar.Header
      style={{
        backgroundColor: '#F7F7F7',
        elevation: 2,
        shadowOpacity: 0,
        borderBottomWidth: 0.5, // Adjusted border width
        // borderTopWidth: 0.5,
        borderBottomColor: '#E0E0E0',
        // borderTopColor: '#E0E0E0',
        height: 60,
        flex: 1,
        alignItems: 'center',
        // paddingTop: Constants.statusBarHeight,
      }}
    >
      <Appbar.BackAction onPress={() => console.log('back pressed')} />
      <Appbar.Content title="My Title" titleStyle={{}} />
    </Appbar.Header>
  );
}
function ScreenHeader() {
  return (
    <Appbar.Header
      style={{
        backgroundColor: '#F7F7F7',
        elevation: 2,
        shadowOpacity: 0,
        borderBottomWidth: 10, // Adjusted border width
        borderBottomColor: '#E0E0E0',
        height: 50,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Appbar.BackAction onPress={() => console.log('back pressed')} />
      <Appbar.Content title="My Title" titleStyle={{}} />
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#F7F7F7',
  },
  contentContainer: {
    backgroundColor: '#F7F7F7',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#F7F7F7',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
    elevation: 2,
    shadowOpacity: 0,
    borderBottomWidth: 1, // Adjusted border width
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    height: 60,
    columnGap: 10,
    // justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    // marginLeft: 16,
    elevation: 3,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default function AppUp() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
// export default AppUp;
