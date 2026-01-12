import { AppText } from "@/components/AppText";
import { Icon } from "@/components/Icon";
import { powersync } from "@/powersync/system";
import { useQuery } from "@powersync/tanstack-react-query";
import { FlashList } from "@shopify/flash-list";
import { Button, Card } from "heroui-native";
import { TrashSimpleIcon } from "phosphor-react-native";
import React from "react";
import { Alert, View } from "react-native";

const CourseList = () => {
  const { data, isLoading, isRefetching, isError, error } = useQuery<
    { id: string; name: string }[]
  >({
    queryKey: ["courses"],
    query: "SELECT * FROM subjects ORDER BY name DESC",
  });

  const handleDelete = async (id: any) => {
    try {
      await powersync.execute(`DELETE FROM subjects WHERE id = "${id}"`);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to delete subject");
    }
  };

  return (
    <View className="w-full max-w-3xl mx-auto flex-1">
      <FlashList
        ListHeaderComponent={
          <View>
            {isLoading && <AppText>Loading...</AppText>}
            {isRefetching && <AppText>Refreshing...</AppText>}
            {isError && <AppText>Error: {error.message}</AppText>}
          </View>
        }
        className="p-2.5"
        data={data}
        renderItem={({ item }) => (
          <Card className="mb-2.5">
            <Card.Body className="flex flex-row justify-between items-center">
              <AppText>{item.name}</AppText>
              <Button
                size="sm"
                isIconOnly
                variant="danger-soft"
                onPress={() => handleDelete(item.id)}
              >
                <Icon as={TrashSimpleIcon} />
              </Button>
            </Card.Body>
          </Card>
        )}
      />
    </View>
  );
};

export default CourseList;
