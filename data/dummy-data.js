import Category from "../models/categories";
import NavigationButtons from "../models/navigationButtons";
import { Ionicons, AntDesign, MaterialCommunityIcons, Foundation, FontAwesome, Entypo } from '@expo/vector-icons';

export const CATEGORIES = [
    new Category(<Ionicons name="person" size={22} color='#002851' />, 'c1', 'Personal Data', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<Ionicons name="settings-sharp" size={22} color='#002851' />, 'c2', 'Settings', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<MaterialCommunityIcons name="file-document" size={22} color="#002851" />, 'c3', 'E-Statements', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<Foundation name="heart" size={22} color="#002851" />, 'c4', 'Referral Code', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<Ionicons name="ellipsis-horizontal-circle-sharp" size={22} color="#002851" />, 'c5', "FAQ's", <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<FontAwesome name="pencil-square" size={22} color="#002851" />, 'c6', 'Our HandBook', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851' />),
    new Category(<FontAwesome name="users" size={22} color="#002851" />, 'c7', 'Community', <AntDesign style={{marginTop: 6}}name="right" size={18} color='#002851'/>)
];

export const NAVIGATIONSBUTTON = [
    new NavigationButtons('a1', <Entypo name="home" size={18} color='#002851'/>),
    new NavigationButtons('a2', <Ionicons name="stats-chart" size={18} color='#002851' />),
    new NavigationButtons('a3', <MaterialCommunityIcons name="message-text" size={18} color='#002851' />),
    new NavigationButtons('a4', <Ionicons name="ios-person-sharp" size={18} color='#002851' />)
]
