import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { motion } from "framer-motion";

const dashboard = () => {
  const quizzes = [
    {
      id: 1,
      title: "AI-Generated: JavaScript Quiz",
      difficulty: "Medium",
      attempts: 150,
    },
    {
      id: 2,
      title: "AI-Generated: Python Fundamentals",
      difficulty: "Hard",
      attempts: 100,
    },
    {
      id: 3,
      title: "AI-Generated: Machine Learning Basics",
      difficulty: "Easy",
      attempts: 200,
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          AI Quiz Generator Dashboard
        </Typography>
      </motion.div>

      {/* Stats Section */}
      <Grid container spacing={3}>
        {[
          { label: "Total AI-Generated Quizzes", value: quizzes.length },
          { label: "Avg. Difficulty Level", value: "Medium" },
        ].map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  bgcolor: "#1976D2",
                  color: "white",
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6">{stat.label}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Generate AI Quiz Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
      </motion.div>

      {/* Recent AI-Generated Quizzes */}
      <Typography variant="h5" sx={{ mt: 5, fontWeight: "bold" }}>
        Recent AI-Generated Quizzes
      </Typography>
      <List>
        {quizzes.map((quiz, index) => (
          <motion.div
            key={quiz.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <ListItem
              button
              sx={{ bgcolor: "#F5F5F5", my: 1, borderRadius: 2, boxShadow: 1 }}
            >
              <ListItemText
                primary={<Typography variant="h6">{quiz.title}</Typography>}
                secondary={`Difficulty: ${quiz.difficulty} | Attempts: ${quiz.attempts}`}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
};

export default dashboard;
