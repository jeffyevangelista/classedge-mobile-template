import { powersync } from "@/powersync/system";
import { Button, TextField } from "heroui-native";
import React, { useState } from "react";
import { Alert, View } from "react-native";

const AddCourseForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    try {
      const id = Math.random().toString(36).substring(2, 15);
      await powersync.execute(
        `INSERT INTO subjects (id, name) VALUES ("${id}", "${name}")`
      );
      setName("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to insert subject");
    }
  };
  return (
    <View className="max-w-3xl mx-auto w-full p-5 gap-2.5">
      <TextField>
        <TextField.Input
          value={name}
          onChangeText={setName}
          placeholder="e.g. Programming 1"
        />
      </TextField>
      <Button isDisabled={name === ""} onPress={handleSubmit}>
        <Button.Label>Add Course</Button.Label>
      </Button>
    </View>
  );
};

export default AddCourseForm;
