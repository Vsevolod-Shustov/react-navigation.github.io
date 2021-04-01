(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{509:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),b=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=b(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(t),d=a,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||r;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),o=t(6),r=(t(0),t(509)),i={id:"screen-options-resolution",title:"Screen options with nested navigators",sidebar_label:"Screen options with nested navigators"},c={unversionedId:"screen-options-resolution",id:"version-5.x/screen-options-resolution",isDocsHomePage:!1,title:"Screen options with nested navigators",description:"In this document we'll explain how screen options work when there are multiple navigators. It's important to understand this so that you put your options in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen.",source:"@site/versioned_docs/version-5.x/screen-options-resolution.md",slug:"/screen-options-resolution",permalink:"/docs/screen-options-resolution",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/screen-options-resolution.md",version:"5.x",sidebar_label:"Screen options with nested navigators",sidebar:"version-5.x/docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/status-bar"},next:{title:"Custom Android back button behavior",permalink:"/docs/custom-android-back-button-handling"}},s=[{value:"Setting parent screen options based on child navigator&#39;s state",id:"setting-parent-screen-options-based-on-child-navigators-state",children:[]}],p={rightToc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this document we'll explain how ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/screen-options"}),"screen options")," work when there are multiple navigators. It's important to understand this so that you put your ",Object(r.b)("inlineCode",{parentName:"p"},"options")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),Object(r.b)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," on a screen inside of the stack?"),Object(r.b)("samp",{id:"stack-in-tab-nav-options"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Tab = createBottomTabNavigator();\nconst HomeStack = createStackNavigator();\nconst SettingsStack = createStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen\n        name="A"\n        component={A}\n        options={{ tabBarLabel: \'Home!\' }}\n      />\n    </HomeStack.Navigator>\n  );\n}\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen\n        name="B"\n        component={B}\n        options={{ tabBarLabel: \'Settings!\' }}\n      />\n    </SettingsStack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="Home" component={HomeStackScreen} />\n        <Tab.Screen name="Settings" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(r.b)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",Object(r.b)("inlineCode",{parentName:"p"},"A")," and ",Object(r.b)("inlineCode",{parentName:"p"},"B")," above are screen components in ",Object(r.b)("inlineCode",{parentName:"p"},"HomeStack")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),Object(r.b)("samp",{id:"stack-in-tab-nav-options-fixed"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen\n          name=\"Home\"\n          component={HomeStackScreen}\n          options={{ tabBarLabel: 'Home!' }}\n        />\n        <Tab.Screen\n          name=\"Settings\"\n          component={SettingsStackScreen}\n          options={{ tabBarLabel: 'Settings!' }}\n        />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,"When we set the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," directly on ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," components containing the ",Object(r.b)("inlineCode",{parentName:"p"},"HomeStack")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the options for its parent navigator when its used as a screen component. In this case, the options on our stack components configure the label in the tab navigator that renders the stacks."),Object(r.b)("h2",{id:"setting-parent-screen-options-based-on-child-navigators-state"},"Setting parent screen options based on child navigator's state"),Object(r.b)("p",null,"Imagine the following configuration:"),Object(r.b)("samp",{id:"parent-options-from-child-start"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={HomeTabs} />\n        <Stack.Screen name="Settings" component={SettingsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(r.b)("p",null,"If we were to set the ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," with ",Object(r.b)("inlineCode",{parentName:"p"},"options")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because ",Object(r.b)("inlineCode",{parentName:"p"},"App")," stack will only look at its immediate children for configuration: ",Object(r.b)("inlineCode",{parentName:"p"},"HomeTabs")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SettingsScreen"),"."),Object(r.b)("p",null,"But we can determine the ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," option based on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-state"}),"navigation state")," of our tab navigator using the ",Object(r.b)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper. Let's create a function to get the title first:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getFocusedRouteNameFromRoute } from '@react-navigation/native';\n\nfunction getHeaderTitle(route) {\n  // If the focused route is not found, we need to assume it's the initial screen\n  // This can happen during if there hasn't been any navigation inside the screen\n  // In our case, it's \"Feed\" as that's the first screen inside the navigator\n  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';\n\n  switch (routeName) {\n    case 'Feed':\n      return 'News feed';\n    case 'Profile':\n      return 'My profile';\n    case 'Account':\n      return 'My account';\n  }\n}\n")),Object(r.b)("p",null,"Then we can use this function in 2 ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Using ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop on ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," (recommended):"),Object(r.b)("samp",{id:"parent-options-from-child-opt1"}),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen\n  name="Home"\n  component={HomeTabs}\n  options={({ route }) => ({\n    headerTitle: getHeaderTitle(route),\n  })}\n/>\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Using ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.setOptions"),":"),Object(r.b)("samp",{id:"parent-options-from-child-opt2"}),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function HomeTabs({ navigation, route }) {\n  React.useLayoutEffect(() => {\n    navigation.setOptions({ headerTitle: getHeaderTitle(route) });\n  }, [navigation, route]);\n\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n      <Tab.Screen name="Account" component={AccountScreen} />\n    </Tab.Navigator>\n  );\n}\n')))),Object(r.b)("p",null,"So what's happening here? With the ",Object(r.b)("inlineCode",{parentName:"p"},"getFocusedRouteNameFromRoute")," helper, we can get the currently active route name from this child navigator (in this case it's the tab navigator since that's what we're rendering) and setting an appropriate title for the header."),Object(r.b)("p",null,"This approach can be used anytime you want to set options for a parent navigator based on a child navigator's state. Common use cases are:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Show tab title in stack header: a stack contains a tab navigator and you want to set the title on the stack header (above example)"),Object(r.b)("li",{parentName:"ol"},"Show screens without tab bar: a tab navigator contains a stack and you want to hide the tab bar on specific screens (not recommended, see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/hiding-tabbar-in-screens"}),"Hiding tab bar in specific screens")," instead)"),Object(r.b)("li",{parentName:"ol"},"Lock drawer on certain screens: a drawer has a stack inside of it and you want to lock the drawer on certain screens")),Object(r.b)("p",null,"In many cases, similar behavior can be achieved by reorganizing our navigators. We usually recommend this option if it fits your use case."),Object(r.b)("p",null,"For example, for the above use case, instead of adding a tab navigator inside a stack navigator, we can add a stack navigator inside each of the tabs."),Object(r.b)("samp",{id:"reorganized-navigators"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const FeedStack = createStackNavigator();\n\nfunction FeedStackScreen() {\n  return (\n    <FeedStack.Navigator>\n      <FeedStack.Screen name="Feed" component={FeedScreen} />\n      {/* other screens */}\n    </FeedStack.Navigator>\n  );\n}\n\nconst ProfileStack = createStackNavigator();\n\nfunction ProfileStackScreen() {\n  return (\n    <ProfileStack.Navigator>\n      <ProfileStack.Screen name="Profile" component={ProfileScreen} />\n      {/* other screens */}\n    </ProfileStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedStackScreen} />\n      <Tab.Screen name="Profile" component={ProfileStackScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Screen name="Home" component={HomeTabs} />\n        <RootStack.Screen name="Settings" component={SettingsScreen} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(r.b)("p",null,"Additionally, this lets you push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks."),Object(r.b)("p",null,"If you want to push screens on top of the tab bar (i.e. that don't show the tab bar), then you can add them to the ",Object(r.b)("inlineCode",{parentName:"p"},"App")," stack instead of adding them into the screens inside the tab navigator."))}b.isMDXComponent=!0}}]);