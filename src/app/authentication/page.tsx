import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <>
      <Header showCategories={false} />

      <div className="flex w-full flex-col gap-6 p-5 md:mx-auto md:max-w-lg md:px-6 lg:px-8">
        <Tabs defaultValue="sign-in">
          <TabsList className="w-full">
            <TabsTrigger value="sign-in" className="flex-1">
              Entrar
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="flex-1">
              Criar conta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="w-full">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;