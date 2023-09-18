import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routsNameMain } from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import FourOhFour from '../pages/404'
import Loading from '../pages/loading'
import Home from '../pages/main/home'
import Login from '../pages/main/login'
import Register from '../pages/main/register'
import About from '../pages/main/about'
import Services from '../pages/main/services'
import Specialties from '../pages/main/specialties'
import Blog from '../pages/main/blog'
import Contacts from '../pages/main/contacts'

// const Home = React.lazy(() => import('../pages/main/home'))

type Props = {
  children: JSX.Element
}

function PrivateLogin({ children }: Props) {
  const user = null

  if (user != null) {
    return <Navigate to={'/'} />
  }

  return children
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Home */}
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          {/* About */}
          <Route
            path={routsNameMain.about}
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          {/* Services */}
          <Route
            path={routsNameMain.services}
            element={
              <React.Suspense fallback={<Loading />}>
                <Services />
              </React.Suspense>
            }
          />
          {/* Specialties */}
          <Route
            path={routsNameMain.specialties}
            element={
              <React.Suspense fallback={<Loading />}>
                <Specialties />
              </React.Suspense>
            }
          />
          {/* Blog */}
          <Route
            path={routsNameMain.blog}
            element={
              <React.Suspense fallback={<Loading />}>
                <Blog />
              </React.Suspense>
            }
          />
          {/* Contacts */}
          <Route
            path={routsNameMain.contacts}
            element={
              <React.Suspense fallback={<Loading />}>
                <Contacts />
              </React.Suspense>
            }
          />
        </Route>

        {/* Login */}
        <Route
          path={routsNameMain.login}
          element={
            <React.Suspense fallback={<Loading />}>
              <PrivateLogin>
                <Login />
              </PrivateLogin>
            </React.Suspense>
          }
        />
        <Route
          path={routsNameMain.register}
          element={
            <React.Suspense fallback={<Loading />}>
              <PrivateLogin>
                <Register />
              </PrivateLogin>
            </React.Suspense>
          }
        />

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <FourOhFour />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
