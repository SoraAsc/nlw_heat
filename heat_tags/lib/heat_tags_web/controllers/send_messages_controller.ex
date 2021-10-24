defmodule HeatTagsWeb.SendMessagesController do
  use HeatTagsWeb, :controller
  alias HeatTags.{Mailer, Email}

  def send_email do
    Email.routine_email()
    |> Mailer.deliver_now()
  end
end
