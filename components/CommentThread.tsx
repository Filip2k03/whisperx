import { Button, Text, View } from "react-native";

export default function CommentThread({ comments, onReply }) {
  return (
    <View>
      {comments.map((comment: any) => (
        <View key={comment.id} style={{ marginLeft: comment.parent_id ? 20 : 0, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{comment.username}</Text>
          <Text>{comment.comment}</Text>
          <Button title="Reply" onPress={() => onReply(comment)} />
          {comment.replies?.length > 0 && (
            <CommentThread comments={comment.replies} onReply={onReply} />
          )}
        </View>
      ))}
    </View>
  );
}
