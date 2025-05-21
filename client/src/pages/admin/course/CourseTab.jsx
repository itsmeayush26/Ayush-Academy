import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useEditCourseMutation,
  useGetCourseByIdQuery,
} from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });

  const [previewThumbnail, setPreviewThumbnail] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const courseId = params.courseId;

  //  Pass courseId to the query
  const { data: courseByIdData, isLoading: courseByIdLoading , refetch } =
  useGetCourseByIdQuery(courseId, {
  });

  const [editCourse, { data, isLoading, isSuccess, error }] =
    useEditCourseMutation();

  //  Load course data once it is fetched
  useEffect(() => {
    if (courseByIdData?.course) {
      const course = courseByIdData?.course;

      setInput({
        courseTitle: course.courseTitle,
        subTitle: course.subTitle,
        description: course.description,
        category: course.category,
        courseLevel: course.courseLevel,
        coursePrice: course.coursePrice,
        courseThumbnail: "", // Only string here, use previewThumbnail for display
      });
      setPreviewThumbnail(course.courseThumbnail); // Set preview for existing image
    }
  }, [courseByIdData]);

  //  Toast for mutation result
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course updated");
      refetch();
    }
    if (error) {
      toast.error(error?.data?.message || "Failed to update course");
    }
  }, [isSuccess, error]);

  if (courseByIdLoading) return <h1>...Loading</h1>;

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const selectCategory = (value) => {
    setInput((prev) => ({ ...prev, category: value }));
  };

  const selectCourseLevel = (value) => {
    setInput((prev) => ({ ...prev, courseLevel: value }));
  };

  //  Handle file input and preview thumbnail
  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput((prev) => ({ ...prev, courseThumbnail: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateCourseHandler = async () => {
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    if (input.courseThumbnail) {
      formData.append("courseThumbnail", input.courseThumbnail);
    }

    await editCourse({ FormData: formData, courseId });
  };

  const isPublished = false;
  const disableSave =
    !input.courseTitle ||
    !input.subTitle ||
    !input.description ||
    !input.category ||
    !input.courseLevel ||
    !input.coursePrice;

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you're done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            {isPublished ? "Unpublished" : "Publish"}
          </Button>
          <Button>Remove Course</Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mt-5">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Fullstack developer"
            />
          </div>
          <div>
            <Label>Subtitle</Label>
            <Input
              type="text"
              name="subTitle"
              value={input.subTitle}
              onChange={changeEventHandler}
              placeholder="Ex. Become a Fullstack developer in 2 months"
            />
          </div>
          <div>
            <Label>Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>

          <div className="flex items-center gap-5">
            <div>
              <Label>Category</Label>
              <Select value={input.category} onValueChange={selectCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {[
                      "Next Js",
                      "Data Science",
                      "Power Bi",
                      "SQL",
                      "Javascript",
                      "Python",
                      "Java",
                      "Flutter",
                      "Mern Stack Development",
                    ].map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Course Level</Label>
              <Select
                value={input.courseLevel}
                onValueChange={selectCourseLevel}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a course level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Level</SelectLabel>
                    {["Beginner", "Medium", "Advance"].map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Price in (INR)</Label>
              <Input
                type="number"
                name="coursePrice"
                value={input.coursePrice}
                onChange={changeEventHandler}
                placeholder="ex: 199"
                className="w-fit"
              />
            </div>
          </div>

          <div>
            <Label>Course Thumbnail</Label>
            <Input
              type="file"
              onChange={selectThumbnail}
              accept="image/*"
              className="w-fit"
            />
            {previewThumbnail && (
              <img
                src={previewThumbnail}
                className="w-64 my-2"
                alt="Course Thumbnail"
              />
            )}
          </div>

          <div className="flex gap-4">
            <Button onClick={() => navigate("/admin/course")} variant="outline">
              Cancel
            </Button>
            <Button
              disabled={isLoading || disableSave}
              onClick={updateCourseHandler}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
