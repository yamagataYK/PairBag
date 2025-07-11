import { Routes, Route, } from 'react-router-dom';
import Header from "./layouts/Header";
import Footer from './layouts/Footer';
import Profile from "./pages/Profile";
import Notice from "./pages/Notice";
import Notification from "./pages/Notification";
import Index from './pages/Index';
import Camera from './pages/Camera';
import SignUp from './pages/SignUp';
import Chat from './pages/Chat';
import ChatFooter from './layouts/ChatFooter';
import MainHeader from './layouts/MainHeader';

function App() {

  return (
    <Routes>
      {/* 1. 単独ページ */}
      <Route path="/sign-up" element={<SignUp />} />

      {/* 2. Footer付き共通レイアウト */}
      <Route element={<Footer />}>

        {/* MainHeaderグループ */}
        <Route element={<MainHeader />}>
          <Route index element={<Index />} />
          <Route path="/camera" element={<Camera />} />
        </Route>

        {/* Headerグループ (chat以外) */}
        <Route element={<Header />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notifications" element={<Notification />} />
        </Route>

      </Route>

      {/* 3. Chatページ専用：Header + ChatFooter */}
      <Route element={<ChatFooter />}>
        <Route element={<Header />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
